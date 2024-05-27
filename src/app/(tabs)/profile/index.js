import React, { useEffect } from 'react';
import { StyleSheet, Text, View, } from "react-native";
import LoggedOut from './LoggedOut';
import PersonalProfile from './PersonalProfile'
import Register from '../../(account)/RegisterForm';
import { useAuth } from '../../../providers/AuthProvider';

export default function Profile() {
    const { session, profile } = useAuth()
    console.log('\nSesion:-----------------------------\n' + session, '\n\nPerfil:-----------------------------\n' + profile + '\n');


    if (session) {
        if (profile) {
            return <PersonalProfile />
        } else {
            return <Register />
        }
    } else {
        return <LoggedOut />
    }
}
