import { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../config-firebase';

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";


const UserContext = createContext();


export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState('');

    //creer un user
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //pour avoir le currentUser
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser);
        });
        return unsubscribe();
    }, [])

    //déconnection
    const logout = () => {
        signOut(auth);
    }


    //Connexion
    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);    
    }

    //Les valeurs des fonctions
    const value ={
        createUser,
        user,
        logout,
        login
    }



    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}

export const UserAuth = () => {
    return useContext(UserContext);
}
