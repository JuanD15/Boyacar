import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../constants/colors';

export default function Counter({ max, value, setValue }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => value > 1 && setValue(value - 1)} style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.count}>{value}</Text>
            <TouchableOpacity onPress={() => value < max && setValue(value + 1)} style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        alignItems: 'center',
        borderRadius: 4,
        height: 25,
        width: 25
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    count: {
        fontSize: 20,
        marginHorizontal: 10,
    },
});
