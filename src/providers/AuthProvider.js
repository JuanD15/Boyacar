import React, { createContext, useState, useEffect } from "react";
import { Text } from "react-native";
import users from "../constants/userTestData";
import { supabase } from "../services/ConnectService.mjs";

export const AuthContext = createContext({});

export function useAuth() {
    return React.useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [session, setSession] = useState(null);
    const [initialized, setInitialized] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
            setSession(session);
            setUser(session ? session.user : null);
            setInitialized(true)
        })
        return () => {
            data.subscription.unsubscribe()
        }
    }, []);

    const signOut = async () => {
        await supabase.auth.signOut()
    }

    const value = {
        user,
        session,
        initialized,
        signOut
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
