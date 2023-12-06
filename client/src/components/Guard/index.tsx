import { Navigate } from 'react-router-dom';
import { useGlobalState } from '../GlobalStateProvider';
import { ReactNode } from 'react';

interface GuardProps {
    children: ReactNode;
}

export const Guard: React.FC<GuardProps> = ({ children }) => {
    const [state, dispatch] = useGlobalState();

    if (!state.isUserLoggedIn) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};
