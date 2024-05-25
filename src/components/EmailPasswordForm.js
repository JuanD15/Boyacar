import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import colors from "../constants/colors";
import { uploadTemporaryImage, updatePicture, uploadProfileImage } from '../services/ImagesServices';
import { signUpWithEmailAndPassword } from '../services/SignUpService';

export default function EmailPasswordForm({ setEmailPasswordDetails, handleNext }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [profileImage, setProfileImage] = useState();

    const handleSubmit = () => {
        if (!email || !password) {
            Alert.alert('Error', 'Todos los campos obligatorios deben estar completos.');
            return;
        }

        signUpWithEmailAndPassword(email, password)
            .then(response => {
                if (response.data.session) {
                    Alert.alert('Registro exitoso');
                } else {
                    throw response.error;
                }
            })
            .catch(error => {
                if (error.name === 'AuthApiError') {
                    Alert.alert('', 'Este usuario ya está registrado');
                } else if (error.name === 'AuthWeakPasswordError') {
                    Alert.alert('', 'La contraseña debe tener al menos 6 caracteres');
                } else {
                    Alert.alert('Error', 'Ocurrió un error inesperado. Inténtalo de nuevo más tarde.');
                }
            });
    };

    const pickProfileImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.8
        });
        if (!result.canceled) {
            setProfileImage(result.assets[0].uri)
            // const img = result.assets[0]
            // const base64 = await FileSystem.readStringAsync(img.uri, { encoding: 'base64' })
            // const filePath=`${user.id}`
            // const response = await uploadProfileImage(result.uri);
            // console.log(response, '----response');
            // console.log(result.uri, '----uri');
            // if (!response.error) {
            //     setProfileImage('https://qdwfpdwadbykxwymotjx.supabase.co/storage/v1/object/public/temporary/tempPhoto.png?t=2024-05-24T16%3A36%3A51.944Z');
            // } else {
            //     Alert.alert('Error', 'No se pudo subir la imagen. Intente nuevamente.');
            // }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={{ marginHorizontal: 'auto', fontWeight: 'bold', fontSize: 20 }}>Foto de perfil</Text>
            <TouchableOpacity onPress={pickProfileImage} style={styles.placeholderContainer}>
                {profileImage ? (
                    <Image source={{ uri: profileImage }} style={styles.profileImage} />
                ) : (
                    <Ionicons name="person-circle-outline" size={100} color={colors.PRIMARY_COLOR} style={{ borderRadius: 50, position: 'absolute' }} />
                )}
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Contraseña"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                    <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="gray" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '15%'
    },
    imageContainer: {
        margin: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    placeholderContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        margin: 20,
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: colors.LIGHT_GRAY,
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
    },
    passwordInput: {
        flex: 1,
        paddingHorizontal: 10,
        height: 40,
    },
    eyeIcon: {
        padding: 10,
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
