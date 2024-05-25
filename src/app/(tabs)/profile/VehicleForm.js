import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import VehicleDetailsForm from "../../../components/VehicleDetailsForm";
import LicenseDetailsForm from "../../../components/LicenseDetailsForm";
import colors from "../../../constants/colors";

export default function VehicleForm() {
    //Indica el nivel en el que esta el formulario: 
    // 1 (por defecto ) no se ha llenado ninguno
    //2 Se lleno el formulario de vehiculo pero no de licencia
    const [currentStep, setCurrentStep] = useState(2);
    const [vehicleDetails, setVehicleDetails] = useState(null);
    const [licenseDetails, setLicenseDetails] = useState(null);

    useEffect(() => {
        if (vehicleDetails && !licenseDetails) {
            setCurrentStep(2);
            Alert.alert('Atención', 'Aún no ha llenado la información de la licencia. Por favor, complete los datos.');
        }
    }, []);

    const handleVehicleSubmit = (details) => {
        setVehicleDetails(details);
        setCurrentStep(2);
    };

    const handleLicenseSubmit = (details) => {
        setLicenseDetails(details);
        Alert.alert('Éxito', 'Registro de vehículo completado.');
        // actualizar estado del usuario (de pasajero a conductor) si se registro correctamente
    };

    return (
        <View style={styles.container}>
            {currentStep === 1 && (
                <VehicleDetailsForm handleVehicleSubmit={handleVehicleSubmit} />
            )}
            {currentStep === 2 && (
                <LicenseDetailsForm handleLicenseSubmit={handleLicenseSubmit} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});
