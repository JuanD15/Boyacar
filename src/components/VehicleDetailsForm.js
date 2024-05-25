import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import colors from '../constants/colors';
import { Picker } from '@react-native-picker/picker';

export default function VehicleDetailsForm({ handleVehicleSubmit }) {
    const [plateLetters, setPlateLetters] = useState('');
    const [plateNumbers, setPlateNumbers] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [soat, setSoat] = useState(null);
    const [insurance, setInsurance] = useState('');
    const [capacity, setCapacity] = useState('');
    const [color, setColor] = useState('');
    const [vehicleImage, setVehicleImage] = useState(null);
    const insuranceOptions = ['Seguros XYZ', 'Seguros ABC', 'Seguros DEF'];

    const handleSubmit = () => {
        if (!plateLetters || !plateNumbers || !vehicleType || !insurance || !capacity || !color) {
            Alert.alert('Error', 'Todos los campos obligatorios deben estar completos.');
            return;
        }
        handleVehicleSubmit({
            plate: plateLetters + plateNumbers,
            vehicleType,
            soat,
            insurance,
            capacity,
            color,
            vehicleImage
        });
    };

    const pickSoat = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        if (result.type === 'success') {
            setSoat(result.uri);
        }
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            setVehicleImage(result.uri);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Características del vehículo</Text>
            <View style={styles.plateContainer}>
                <Text style={styles.plateLabel}>Placa:</Text>
                <View style={styles.plateInputsContainer}>
                    <TextInput
                        style={[styles.plateInput]}
                        placeholder="AAA"
                        maxLength={3}
                        value={plateLetters}
                        onChangeText={setPlateLetters}
                    />
                    <Text style={styles.hyphen}>-</Text>
                    <TextInput
                        style={[styles.plateInput]}
                        placeholder="000"
                        keyboardType="numeric"
                        maxLength={3}
                        value={plateNumbers}
                        onChangeText={setPlateNumbers}
                    />
                </View>
            </View>
            <Picker
                selectedValue={vehicleType}
                style={styles.input}
                onValueChange={(itemValue) => setVehicleType(itemValue)}
            >
                <Picker.Item label="Selecciona el tipo de vehículo" value="" />
                {/* Opciones del picker obtenidas desde el API */}
                <Picker.Item label="Sedán" value="Sedán" />
                <Picker.Item label="SUV" value="SUV" />
                <Picker.Item label="Camioneta" value="Camioneta" />
            </Picker>
            <TouchableOpacity onPress={pickSoat} style={styles.button}>
                <Text style={styles.buttonText}>{soat ? 'SOAT seleccionado' : 'Seleccionar SOAT'}</Text>
            </TouchableOpacity>
            <Picker
                selectedValue={insurance}
                style={styles.input}
                onValueChange={(itemValue) => setInsurance(itemValue)}
            >
                <Picker.Item label="Selecciona el seguro" value="" />
                {insuranceOptions.map((option) => (
                    <Picker.Item key={option} label={option} value={option} />
                ))}
            </Picker>
            <TextInput
                style={styles.input}
                placeholder="Capacidad del vehículo"
                keyboardType="numeric"
                value={capacity}
                onChangeText={setCapacity}
            />
            <TextInput
                style={styles.input}
                placeholder="Color del vehículo"
                value={color}
                onChangeText={setColor}
            />
            <TouchableOpacity onPress={pickImage} style={styles.button}>
                <Text style={styles.buttonText}>{vehicleImage ? 'Foto seleccionada' : 'Seleccionar foto'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Guardar y continuar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
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
    plateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'red',
        justifyContent: 'space-between'
    },
    plateInputsContainer: {
        // backgroundColor: 'red',
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    plateInput: {
        flex: 1,
        textAlign: 'center',
        height: 30,
        width: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,

    },
    hyphen: {
        fontSize: 24,
        marginHorizontal: 5,

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
