import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function LoggedOut() {
    return (
        <View style={styles.container}>
            <FontAwesome name="user-circle-o" size={100} color="gray" />
            <Text style={styles.infoText}>Inicia sesión para viajar</Text>
            <Link href={'/Login'} asChild>
                <TouchableOpacity style={styles.button} >
                    <Text>Login</Text>
                </TouchableOpacity>
            </Link >
            <Link href={'profile/tripsManage/TripForm'} asChild>
                <TouchableOpacity style={styles.button} >
                    <Text>Crear Viaje</Text>
                </TouchableOpacity>
            </Link >
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoText: {
        paddingVertical: 40,
        fontSize: 20
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'black',
        width: 100,
        height: 40,
        borderRadius: 10
    }
})