import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as DocumentPicker from 'expo-document-picker';
import colors from "../constants/colors";
import { Picker } from '@react-native-picker/picker';
import { signOut } from '../services/SignOut';
import { insertPerson } from '../services/PersonService';
import { insertProfile } from '../services/ProfileService';
import { useAuth } from '../providers/AuthProvider';
import { formatDate } from '../utils/FormatDate';
import moment from 'moment';
import { router } from 'expo-router';



export default function PersonalDetailsForm() {
    const { user, profile, setProfile } = useAuth()

    const [identityNumber, setIdentityNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [documentFile, setDocumentFile] = useState(null);
    const genderOptions = ['Masculino', 'Femenino', 'Otro'];

    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 18);

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || birthDate;

        currentDate.setHours(12, 0, 0);

        setShowDatePicker(false);
        setBirthDate(currentDate);
    };

    const handleSubmit = async () => {
        if (!identityNumber || identityNumber.length < 8 || identityNumber.length > 10) {
            Alert.alert('Error', 'Todos los campos obligatorios deben estar completos y válidos.');
            return;
        }

        const birthDateFormatted = birthDate.toISOString().split('T')[0];

        const person = {
            person_id: identityNumber,
            person_name: firstName,
            person_last_name: lastName,
            birth_date: birthDateFormatted,
            person_gender: gender,
            phone_number: phoneNumber,
        }

        const profile = {
            user_id: user.id,
            person_id: identityNumber
        }

        await insertPerson(person)
            .then(response => {
                if (!response.data) {
                    Alert.alert('Bienvenido', 'Tus datos se han registrado correctamente')
                } else {
                    throw response.error
                }
            })
            .catch(error => {
                console.log(error);
                Alert.alert('', 'No se ha podido registrar, intenta nuevamente')
            })

        await insertProfile(profile)
            .then(response => {
                console.log(response);
                if (response.data) {
                    console.log('Perfil agregado');
                    setProfile(response.data[0])
                } else {
                    throw response.error
                }
            })
            .catch(error => {
                console.log(error);
            })

        router.push('(tabs)/profile/PersonalProfile')
    };

    const pickDocumentFile = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        if (result.type === 'success') {
            setDocumentFile(result.uri);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Datos Personales</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Documento de identidad"
                    keyboardType="numeric"
                    maxLength={10}
                    value={identityNumber}
                    onChangeText={setIdentityNumber}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Nombre(s)"
                    value={firstName}
                    onChangeText={setFirstName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Apellido(s)"
                    value={lastName}
                    onChangeText={setLastName}
                />
                <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.button}>
                    <Text style={styles.buttonText}>Fecha de nacimiento: {birthDate.toLocaleDateString()}</Text>
                </TouchableOpacity>
                {showDatePicker && (
                    <DateTimePicker
                        value={birthDate}
                        mode="date"
                        display="default"
                        onChange={onDateChange}
                        maximumDate={maxDate}
                    />
                )}
                <Picker
                    selectedValue={gender}
                    style={styles.input}
                    onValueChange={(itemValue) => setGender(itemValue)}
                >
                    <Picker.Item label="Selecciona tu género" value="" />
                    {genderOptions.map((option) => (
                        <Picker.Item key={option} label={option} value={option} />
                    ))}
                </Picker>
                <TextInput
                    style={styles.input}
                    placeholder="Número de teléfono"
                    keyboardType="numeric"
                    maxLength={10}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />
                <TouchableOpacity onPress={pickDocumentFile} style={styles.button}>
                    <Text style={styles.buttonText}>{documentFile ? 'Documento seleccionado' : 'Selecciona un documento'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSubmit} style={styles.button} >
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => signOut()} style={styles.button}>
                    <Text style={styles.buttonText}>Cerrar sesión</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: colors.PRIMARY_COLOR,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});
