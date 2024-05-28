import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Alert } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from "../../../../constants/colors";
import { Picker } from '@react-native-picker/picker';
import { Stack, router } from "expo-router";
import { insertTrip } from "../../../../services/TripService";
import { useAuth } from "../../../../providers/AuthProvider";
import { fetchVehicleWithProfileID } from "../../../../services/VehicleService";

export default function CreateTrip() {
    const { profile } = useAuth()
    const [vehicle, setVehicle] = useState();
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [slots, setSlots] = useState('');
    const [departureCity, setDepartureCity] = useState('');
    const [destinyCity, setDestinyCity] = useState('');
    const [cost, setCost] = useState();
    const [address, setAddress] = useState('');
    const cities = ["Tunja", "Sogamoso", "Duitama", "Chiquinquirá", "Paipa", "Villa de Leyva", "Tibasosa", "Tenza", "Monguí", "Ráquira"];

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const handleSubmit = () => {
        if (!slots || !departureCity || date < new Date() || !cost || !destinyCity) {
            Alert.alert('Error', 'Por favor, completa todos los campos obligatorios y asegúrate de que la fecha sea igual o superior a la actual.');
            return;
        }

        const trip = {
            vehicle_id: vehicle,
            profile_id: profile.profile_id,
            available_seats: slots,
            date_time_departure: date,
            address: address,
            cost: cost,
            city_origin: departureCity,
            city_destiny: destinyCity
        }

        submitTrip(trip)
    };

    useEffect(() => {
        const fetchVehicle = async () => {
            try {
                const data = await fetchVehicleWithProfileID(profile.profile_id);
                console.log('Se obtuvo el vehiculo de placa', data.data.vehicle_id);
                setVehicle(data.data.vehicle_id)
            } catch (error) {
                console.log('No se pudo obtener el vehiculo', error);
            }
        }
        fetchVehicle()
    }, []);

    const submitTrip = async (tripData) => {
        try {
            const data = await insertTrip(tripData);
            Alert.alert('Éxito', 'Viaje creado correctamente.');
            router.push('/profile')
        } catch (error) {
            Alert.alert('Error', 'No se pudo crear el viaje. Inténtalo de nuevo.');
        }
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: 'Crea tu viaje', headerStyle: { backgroundColor: colors.PRIMARY_COLOR, }, headerTintColor: 'white' }} />
            <Text style={styles.title}>Detalles del viaje</Text>
            <TouchableOpacity onPress={showDatepicker} style={styles.datePicker}>
                <Text style={styles.dateText}>Fecha: {date.toLocaleDateString()}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={showTimepicker} style={styles.datePicker}>
                <Text style={styles.dateText}>Hora: {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                    value={date}
                    mode={mode}
                    display="default"
                    onChange={onChange}
                    minimumDate={new Date()}
                />
            )}
            <TextInput
                style={styles.input}
                placeholder="Cupos disponibles"
                keyboardType="numeric"
                value={slots}
                onChangeText={setSlots}
            />
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={departureCity}
                    style={styles.picker}
                    onValueChange={(itemValue) => setDepartureCity(itemValue)}
                >
                    <Picker.Item label="Selecciona ciudad origen" value="" />
                    {cities.map((c) => (
                        <Picker.Item key={c} label={c} value={c} />
                    ))}
                </Picker>
            </View>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={destinyCity}
                    style={styles.picker}
                    onValueChange={(itemValue) => setDestinyCity(itemValue)}
                >
                    <Picker.Item label="Selecciona ciudad destino" value="" />
                    {cities.filter((c) => (c != departureCity)).map((c) => (
                        <Picker.Item key={c} label={c} value={c} />
                    ))}
                </Picker>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Costo"
                keyboardType="numeric"
                value={cost}
                onChangeText={setCost}
            />
            <TextInput
                style={styles.input}
                placeholder="Dirección (opcional)"
                value={address}
                onChangeText={setAddress}
            />
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Crear viaje</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    datePicker: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: 'gray',
        elevation: 5,
    },
    dateText: {
        fontSize: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    pickerContainer: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
    },
    picker: {
        height: 50,
        width: '100%',
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
