import React, { useEffect } from 'react';
import { Link, router } from "expo-router";
import { StyleSheet, Text, View, } from "react-native";
import Login from '../(account)/Login';
import LoggedOut from '../../components/LoggedOut';

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