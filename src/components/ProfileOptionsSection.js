import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import colors from '../constants/colors';

const ProfileOptionsSection = ({ title, options }) => {
    return (
        <View style={styles.profileOptionsSection}>
            <Text style={styles.infoTitle}>{title}</Text>
            {options.map((option, index) => (
                <Link href={'/Login'} asChild>
                    <TouchableOpacity style={styles.profileOption}>
                        <Text>{option}</Text>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={25}
                            color="rgba(0,0,0,0.2)"
                            style={styles.arrowIcon}
                        />
                    </TouchableOpacity>
                </Link>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    profileOptionsSection: {
        padding: 15,
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    profileOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 18,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.BACKGROUND_GRAY,
    },
    arrowIcon: {
        position: 'absolute',
        right: 5
    },
});

export default ProfileOptionsSection;
