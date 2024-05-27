import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import colors from '../constants/colors';
import { Picker } from '@react-native-picker/picker';
import { useAuth } from '../providers/AuthProvider';
import { fetchManufacturer, insertVehicle } from '../services/VehicleService';


export default function VehicleDetailsForm({ handleVehicleSubmit }) {
    const { profile } = useAuth()
    const [plateLetters, setPlateLetters] = useState('');
    const [plateNumbers, setPlateNumbers] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [soat, setSoat] = useState(null);
    const [manufacturer, setManufacturer] = useState('');
    const [manufacturers, setManufacturers] = useState([]);
    const [insurance, setInsurance] = useState('');
    const [capacity, setCapacity] = useState('');
    const [color, setColor] = useState('');
    const [vehicleImage, setVehicleImage] = useState(null);
    const insuranceOptions = ['Seguros XYZ', 'Seguros ABC', 'Seguros DEF'];

    useEffect(() => {
        const loadManufacturers = async () => {
            const { data, error } = await fetchManufacturer();
            if (error) {
                Alert.alert('Error', 'Error al cargar los fabricantes de vehículos');
            } else {
                setManufacturers(data);
            }
        };

        loadManufacturers();
    }, []);

    const handleSubmit = async () => {
        if (!plateLetters || !plateNumbers || !manufacturer || !insurance || !capacity || !color) {
            Alert.alert('Error', 'Todos los campos obligatorios deben estar completos.');
            return;
        }
        const vehicleDetails = {
            vehicle_id: plateLetters + plateNumbers,
            profile_id: profile.profile_id,
            manufacturer_id: manufacturer,
            vehicle_insurace: insurance,
            capacity: capacity,
            vehicle_color: color,
            car_photo: vehicleImage,
        };

        const { error } = await insertVehicle(vehicleDetails);
        console.log(error, 'error');
        if (error) {
            Alert.alert('Error', 'Error al registrar el vehículo.');
        } else {
            Alert.alert('Éxito', 'Vehículo registrado exitosamente.');
            handleVehicleSubmit(vehicleDetails);
        }
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
                selectedValue={manufacturer}
                style={styles.input}
                onValueChange={(itemValue) => setManufacturer(itemValue)}
            >
                <Picker.Item label="Selecciona el fabricante del vehículo" value="" />
                {manufacturers.map((man) => (
                    <Picker.Item key={man.manufacturer_id} label={`${man.mark} ${man.line} ${man.model}`} value={man.manufacturer_id} />
                ))}
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
        justifyContent: 'space-between'
    },
    plateInputsContainer: {
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
