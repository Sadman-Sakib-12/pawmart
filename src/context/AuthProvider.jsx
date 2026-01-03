import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "./AuthContext";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoadign] = useState(true)

    const createUserWithEmailAndPasswordFunc = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signoutUserFunc = () => {
        setLoadign(true)
        return signOut(auth)
    }

    const signInWithEmailAndPasswordFunc = (email, password) => {
        setLoadign(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    };
    const signInwithEmailFunc = () => {
        setLoadign(true)
        return signInWithPopup(auth, googleProvider)
    }
    const authInfo = {
        user,
        setUser,
        createUserWithEmailAndPasswordFunc,
        signoutUserFunc,
        signInWithEmailAndPasswordFunc,
        signInwithEmailFunc,
       updateUserProfile,
        loading,
        setLoadign,
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currUser) => {
            setUser(currUser)
            setLoadign(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    return <AuthContext value={authInfo}>{children}</AuthContext>
}

export default AuthProvider