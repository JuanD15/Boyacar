import React from 'react';
import { StyleSheet, Text, View, } from "react-native";
import LoggedOut from './LoggedOut';
import PersonalProfile from './PersonalProfile'

export default function Profile() {
    const user = true;

    return (
        <View>
            {user ? (
                <PersonalProfile />
            ) : (
                <LoggedOut />
            )}
        </View>

    )
}

const styles = StyleSheet.create({})