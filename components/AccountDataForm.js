import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import MyTextInput from './MyTextInput';
import colors from '../assets/styles/colors';

export default AccountDataForm = (props) => {
    const { formData, setFormData, isAccountFormComplete, setIsAccountFormComplete } = props;
    const [image, setImage] = useState(null);
    const [showPermissionAlert, setShowPermissionAlert] = useState(false);
    const [permissionAlertShown, setPermissionAlertShown] = useState(false);

    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
        if (value === '' || !formData.email || !formData.phoneNumber || !formData.password || !formData.repeatPassword) {
            setIsAccountFormComplete(false);
        } else {
            setIsAccountFormComplete(true);
        }
    };

    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted' && !permissionAlertShown) {
                setShowPermissionAlert(true);
                setPermissionAlertShown(true);
            }
        })();
    }, []);

    // Función para manejar la selección de imágenes
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const requestPermissionsAgain = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status === 'granted') {
            setShowPermissionAlert(false);
        }
    };

    return (
        <>
            <View style={styles.formInfo}>
                <Text style={styles.title}>Cuenta</Text>
            </View>
            <ScrollView style={styles.personalInfoScroll}>
                <View style={styles.personalInfo}>
                    {showPermissionAlert && (
                        <View style={styles.permissionAlert}>
                            <TouchableOpacity onPress={requestPermissionsAgain} style={styles.permissionAlertButton}>
                            </TouchableOpacity>
                        </View>
                    )}
                    <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
                        {image && <Image source={{ uri: image }} style={styles.image} />}
                        {!image && <Text style={styles.imagePickerText}>Seleccionar Foto</Text>}
                    </TouchableOpacity>
                    <MyTextInput
                        style={styles.myInput}
                        value={formData.email}
                        label={'Correo electrónico'}
                        onChangeText={(value) => handleInputChange('email', value)}
                    />
                    <MyTextInput
                        style={styles.myInput}
                        value={formData.phoneNumber}
                        label={'Número de teléfono'}
                        onChangeText={(value) => handleInputChange('phoneNumber', value)}
                    />
                    <MyTextInput
                        style={[styles.myInput, styles.passwordSection]}
                        value={formData.password}
                        label={'Contraseña'}
                        onChangeText={(value) => handleInputChange('password', value)}
                    />
                    <MyTextInput
                        style={[styles.myInput, styles.repeatPasswordSection]}
                        value={formData.repeatPassword}
                        label={'Repetir contraseña'}
                        onChangeText={(value) => handleInputChange('repeatPassword', value)}
                    />
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    formInfo: {
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.PRIMARY_COLOR,
    },
    title: {
        fontFamily: 'Inter_400Regular',
        fontSize: 25,
        color: 'white',
    },
    personalInfoScroll: {
        height: '50%',
        width: '100%',
    },
    personalInfo: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    personalInfoText: {
        paddingLeft: 10,
    },
    imagePicker: {
        width: 100,
        height: 100,
        borderRadius: 75,
        backgroundColor: colors.BACKGROUND_GRAY,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        borderWidth: 2,
        borderColor: colors.PRIMARY_COLOR_DARK,
    },
    imagePlaceholder: {
        width: 100,
        height: 100,
        borderRadius: 75,
        backgroundColor: 'gray',
    },
    image: {
        width: 10,
        height: 100,
        borderRadius: 75,
    },
    myInput: {
        minWidth: '80%',
        marginVertical: 30,
        color: 'black'
    },
})