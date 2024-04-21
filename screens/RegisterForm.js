import { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from "react-native";
import RegisterFormStyles from "../assets/styles/RegisterFormStyles";

export default function RegisterForm(props) {
    const { changeForm } = props;
    const [formData, setFormData] = useState(defaultValue());
    return (
        <View style={styles.container}>
            <View style={styles.formInfo}>
                <Text style={styles.title}>Información personal</Text>
            </View>
            <View style={styles.personalInfo}>
                <View style={[styles.firstNameSection, styles.inputSection]}>
                    <Text>Primer nombre</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={[styles.secondNameSection, styles.inputSection]}>
                    <Text>Segundo nombre</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={[styles.firstLastNameSection, styles.inputSection]}>
                    <Text>Primer apellido</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={[styles.secondLastNameSection, styles.inputSection]}>
                    <Text>Segundo apellido</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={[styles.birthdateSection, styles.inputSection]}>
                    <Text>Fecha de nacimiento</Text>
                    <TextInput style={styles.input} />
                </View>

            </View>
            <View style={styles.formFooter}>
                <TouchableOpacity onPress={{}} style={styles.button}>
                    <Text style={styles.buttonText}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

function defaultValue() {
    return {
        firstNames: '',
        lastNames: '',
        birthdate: '',
        email: '',
        phoneNumber: '',
        password: "",
        repeatPassword: ''
    }
}

const styles = StyleSheet.create(RegisterFormStyles)