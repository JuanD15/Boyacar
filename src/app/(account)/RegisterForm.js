import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import EmailPasswordForm from '../../components/EmailPasswordForm';
import PersonalDetailsForm from '../../components/PersonalDetailsForm';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from "../../constants/colors";
import { signUpWithEmailAndPassword } from '../../services/SignUpService';

export default function Register({ uploadProfileImage }) {
    const [step, setStep] = useState(1);
    const [emailPasswordDetails, setEmailPasswordDetails] = useState(null);

    useEffect(() => {
        checkProgress();
    }, []);

    const checkProgress = async () => {
        const savedStep = await AsyncStorage.getItem('registerStep');
        if (savedStep) {
            setStep(parseInt(savedStep));
            if (parseInt(savedStep) > 1) {
                Alert.alert('Aviso', 'Aún no ha llenado todos los datos y debe hacerlo.');
            }
        }
    };

    const handleNext = async () => {
        // setStep(1)
        if (step === 1 && emailPasswordDetails) {

            // setStep(2);
            // await AsyncStorage.setItem('registerStep', '2');

        } else if (step === 2) {
            // const response = await submitPersonalDetails(details);
            const response = { success: true };
            if (response.success) {
                Alert.alert('Registro completado.');
                await AsyncStorage.removeItem('registerStep');
            } else {
                Alert.alert('Error', response.message);
            }
        } else {
            Alert.alert('Error', 'Debe completar el formulario actual antes de continuar.');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.stepsIndicator}>
                <View style={[styles.step, step >= 1 && styles.activeStep]}></View>
                <View style={[styles.step, step >= 2 && styles.activeStep]}></View>
            </View>
            {step === 1 && <EmailPasswordForm setEmailPasswordDetails={setEmailPasswordDetails} uploadProfileImage={uploadProfileImage} handleNext={handleNext} />}
            {step === 2 && <PersonalDetailsForm handleNext={handleNext} />}
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
