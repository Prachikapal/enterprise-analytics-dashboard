import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../services/firebase";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const[loading, setLoading] = useState(true);
    const[user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async(currentUser) => {
            if(currentUser){
                const docRef = doc(db,"users",currentUser.uid);
                const docSnap = await getDoc(docRef);
                setUser({
                    uid: currentUser.uid,
                    email: currentUser.email,
                    role: docSnap.data().role
                });
            }else{
                setUser(null);
            }
            setLoading(false);
        })

        return () => unsubscribe();
    }, []);

    return(
        <AuthContext.Provider value={{loading, user}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext);