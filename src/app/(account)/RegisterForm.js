import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import EmailPasswordForm from '../../components/EmailPasswordForm';
import PersonalDetailsForm from '../../components/PersonalDetailsForm';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from "../../constants/colors";
import { signUpWithEmailAndPassword } from '../../services/SignUpService';
import { useAuth } from '../../providers/AuthProvider';

export default function Register() {
    const { profile, session } = useAuth()

    const [emailPasswordDetails, setEmailPasswordDetails] = useState(null);

    // useEffect(() => {
    //     checkProgress();
    // }, []);

    return (
        <View style={styles.container}>
            {!profile && !session ? (<EmailPasswordForm />) :
                (<PersonalDetailsForm />)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    stepsIndicator: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    step: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'gray',
        margin: 5,
    },
    activeStep: {
        backgroundColor: colors.PRIMARY_COLOR,
    },
    button: {
        backgroundColor: colors.PRIMARY_COLOR,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});
