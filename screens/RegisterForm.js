import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import RegisterFormStyles from "../assets/styles/RegisterFormStyles";
import PersonalDataForm from "../components/PersonalDataForm";
import AccountDataForm from "../components/AccountDataForm";
import { postPassenger } from "../services/PassengersService"
import { formatDate } from "../utils/FormatDate";
import colors from "../assets/styles/colors";
import SuccessAlert from "../components/SuccessAlert";


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

    const submit = () => {
        const passenger = {
            nombres: formData.names,
            apellidos: formData.lastNames,
            fecha_nacimiento_pasajero: formatDate(formData.birthdate),
            contraseña_pasajero: formData.password,
            telefono_pasajero: formData.phoneNumber,
            correo_pasajero: formData.email,
            cedula_pasajero: formData.documentId,
        }
        postPassenger(passenger)
        return (
            <SuccessAlert />
        )
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
                    <TouchableOpacity onPress={submit}
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
        birthdate: '',
        password: "",
        repeatPassword: '',
        phoneNumber: '',
        email: '',
        documentId: '',
    }
}

const styles = StyleSheet.create(RegisterFormStyles)