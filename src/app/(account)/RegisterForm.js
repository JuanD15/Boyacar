import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import PersonalDataForm from "../../components/PersonalDataForm";
import AccountDataForm from "../../components/AccountDataForm";
import useSuccessAlert from "../../components/SuccessAlert";
import colors from '../../constants/colors';
import { formatDate } from "../../utils/FormatDate";
import { registerUserData } from "../../services/RegisterService.mjs";

export default function RegisterForm(props) {
    const [formData, setFormData] = useState(defaultValue());
    const [isPersonalFormComplete, setIsPersonalFormComplete] = useState(false);
    const [isAccountFormComplete, setIsAccountFormComplete] = useState(false);
    const [confirmForm, setConfirmForm] = useState(false);

    const handleContinue = () => {
        if (isPersonalFormComplete && isAccountFormComplete) {
            console.log('complete');
        } else if (isPersonalFormComplete && !isAccountFormComplete) {
            setConfirmForm(true)
            console.log('confirm');
        } else {
            console.log('error');
        }
    };

    const showSuccessAlert = useSuccessAlert();
    const submit = async () => {
        formData.birthDate = formatDate(formData.birthDate);
        if (formData.genre === '') null

        console.log(formData);

        const result = await registerUserData(formData)
        console.log('result --------', result);
        // showSuccessAlert();s
    }

    return (
        <View style={styles.container}>
            {(!isPersonalFormComplete || !confirmForm) ? (
                <PersonalDataForm
                    formData={formData}
                    setFormData={setFormData}
                    isPersonalFormComplete={isPersonalFormComplete}
                    setIsPersonalFormComplete={setIsPersonalFormComplete}
                />) : (
                <AccountDataForm
                    formData={formData}
                    setFormData={setFormData}
                    isAccountFormComplete={isAccountFormComplete}
                    setIsAccountFormComplete={setIsAccountFormComplete}
                />
            )}
            {(!isPersonalFormComplete || !confirmForm) ? (
                < View style={styles.formFooter}>
                    <TouchableOpacity onPress={handleContinue}
                        style={[styles.button, { backgroundColor: isPersonalFormComplete ? colors.PRIMARY_COLOR : 'gray' }]}
                        disabled={!isPersonalFormComplete}>
                        <Text style={styles.buttonText}>Continuar</Text>
                    </TouchableOpacity>
                </View>) : (
                < View style={styles.formFooter}>
                    <TouchableOpacity onPress={() => { console.log('Registrar'); }}
                        style={[styles.button, { backgroundColor: isAccountFormComplete ? colors.PRIMARY_COLOR : 'gray' }]}
                        disabled={!isAccountFormComplete}>
                        <Text style={styles.buttonText}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View >
    )
}

function defaultValue() {
    return {
        names: '',
        lastNames: '',
        birthDate: '',
        documentId: '',
        documentId_image: 'URL',
        email: '',
        phoneNumber: '',
        genre: '',
        profilePicture: 'URL',
        password: "",
        repeatPassword: '',
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        with: '100%',
    },
    formFooter: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '15%'
    },
    button: {
        borderRadius: 10,
        width: 310,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Inter_Light',
        fontSize: 17,
        fontWeight: 'bold',
    },
})