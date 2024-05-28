import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoTripsComponent = () => (
    <View style={styles.noTripsContainer}>
        <Text style={styles.noTripsText}>No hay rutas disponibles</Text>
    </View>
);

const styles = StyleSheet.create({
    noTripsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    noTripsText: {
        fontSize: 18,
        color: 'gray',
    },
});

export default NoTripsComponent;
