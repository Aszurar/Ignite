import React, { createContext, ReactNode, useContext } from "react";

interface AuthProviderProps {
    children: ReactNode
}

interface userProps {
    id: string;
    name: string;
    email: string;
    photo?: string;
}

interface AuthContextProps {
    user: userProps;
}
// context create
const AuthContext = createContext({} as AuthContextProps);

// provider create
function AuthProvider({ children }: AuthProviderProps){
    const user = {
        id: '1',
        name: 'Lucas de Lima',
        email: 'luca_m.s@hotmail.com'
    }
    return(
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}

// hook create
function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export {AuthProvider, useAuth}