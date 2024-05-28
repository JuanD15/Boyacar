import { Stack } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import colors from "../../../constants/colors";

export default function LoadingPage({ loading }) {

    return (
        <View style={styles.container}>
            <Spinner visible={loading} textContent="Cargando ruta" overlayColor={colors.PRIMARY_COLOR} textStyle={{ color: 'white' }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100
    },
    loadingText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})