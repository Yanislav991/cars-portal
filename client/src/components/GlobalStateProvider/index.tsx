import React, { createContext, useReducer, useContext, ReactNode, Dispatch } from 'react';

interface GlobalState {
    isUserLoggedIn: boolean;
    username: string;
}

const defaultGlobalState: GlobalState = {
    isUserLoggedIn: false,
    username: "",
};

const GlobalStateContext = createContext<GlobalState>(defaultGlobalState);
const DispatchStateContext = createContext<Dispatch<any> | undefined>(undefined);

interface GlobalStateProviderProps {
    children: ReactNode;
}

const globalStateReducer = (state: GlobalState, newValue: Partial<GlobalState>): GlobalState => ({
    ...state,
    ...newValue,
});

const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(globalStateReducer, defaultGlobalState);

    return (
        <GlobalStateContext.Provider value={state}>
            <DispatchStateContext.Provider value={dispatch}>
                {children}
            </DispatchStateContext.Provider>
        </GlobalStateContext.Provider>
    );
};

export const useGlobalState = (): [GlobalState, Dispatch<any> | undefined] => [
    useContext(GlobalStateContext),
    useContext(DispatchStateContext),
];

export default GlobalStateProvider;
