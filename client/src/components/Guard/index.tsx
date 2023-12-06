import { Navigate } from 'react-router-dom';
import { useGlobalState } from '../GlobalStateProvider';
import { ReactNode } from 'react';

interface GuardProps {
    name: string;
    children: ReactNode;
}

const Guard: React.FC<GuardProps> = ({ name, children }) => {
    const [state, dispatch] = useGlobalState();

    if (!state.isUserLoggedIn) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};

export default Guard;
