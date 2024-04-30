import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

export default function Feed() {

    return (
        <View style={styles.container}>
            <Text>Bienvenido</Text>
        </View>
    );
}

function testLog() {

}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'center',
    },
});
