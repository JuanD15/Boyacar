import React from 'react';
import { StyleSheet, Text, View, } from "react-native";
import LoggedOut from './LoggedOut';

export default function Profile() {
    const user = null;

    return (
        <View>
            {user ? (
                <Text>Perfil de{user && user.name}</Text>
            ) : (
                <LoggedOut />
            )}
        </View>

    )
}

const styles = StyleSheet.create({})