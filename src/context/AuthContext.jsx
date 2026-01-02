import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const[loading, setLoading] = useState(true);
    const[user, setUser] = useState(null);

    useEffect(() => {}, []);

    return(
        <AuthContext.Provider value={{loading, user}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext);