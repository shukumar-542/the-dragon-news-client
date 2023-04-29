import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const loggedInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth, loggedUser=>{
            console.log('loggedIn user inside on auth',loggedUser );
            setUser(loggedUser)
            setLoading(false)
        })
        return () =>{
            unSubscriber()
        }
    },[])
    const authInfo = {
        user,
        createUser,
        loggedInUser,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;