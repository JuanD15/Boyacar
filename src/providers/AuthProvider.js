import React, { createContext, useState, useEffect } from "react";
import { Text } from "react-native";
import users from "../constants/userTestData";
import { supabase } from "../services/ConnectService.mjs";
import { insertPerson } from "../services/PersonService";
import { fetchProfileWithUserID, insertProfile } from "../services/ProfileService";
import { signOut } from "../services/SignOut";
// import { signUpWithEmailAndPassword } from "../services/SignUpService";

export const AuthContext = createContext({});

export function useAuth() {
    return React.useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [session, setSession] = useState(null);
    const [initialized, setInitialized] = useState(false);


    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
            setSession(session);
            const currentUser = session?.user ?? null;
            setUser(currentUser);
            setInitialized(true);
            if (currentUser) {
                const userProfile = await fetchProfileWithUserID(currentUser.id);
                if (userProfile.data) {
                    setProfile(userProfile.data);
                } else {
                    setProfile(null);
                }

            } else {
                setProfile(null);
            }
        });

        return () => {
            authListener?.subscription.unsubscribe()
        }
    }, []);


    const value = {
        user,
        session,
        profile,
        initialized,
        setProfile
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
