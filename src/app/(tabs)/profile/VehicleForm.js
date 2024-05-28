import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import VehicleDetailsForm from "../../../components/VehicleDetailsForm";
import LicenseDetailsForm from "../../../components/LicenseDetailsForm";
import colors from "../../../constants/colors";
import { fetchVehicleWithProfileID, insertVehicle } from "../../../services/VehicleService";
import { fetchLicenseWithProfileID, insertLicense } from "../../../services/LicenseService";
import { updateProfileType } from "../../../services/ProfileService";
import { useAuth } from "../../../providers/AuthProvider";
import { router } from "expo-router";

export default function VehicleForm() {
    const { profile } = useAuth();
    const [currentStep, setCurrentStep] = useState(1);
    const [vehicleDetails, setVehicleDetails] = useState(null);
    const [licenseDetails, setLicenseDetails] = useState(null);

    useEffect(() => {
        const checkVehicleAndLicense = async () => {
            try {
                const vehicleResponse = await fetchVehicleWithProfileID(profile.profile_id);
                if (vehicleResponse.data) {
                    setVehicleDetails(vehicleResponse.data);
                    const licenseResponse = await fetchLicenseWithProfileID(profile.profile_id);
                    if (licenseResponse.data) {
                        setLicenseDetails(licenseResponse.data);
                        await updateProfileType(profile.profile_id);
                        Alert.alert('Éxito', 'Registro de vehículo y licencia completado. Ahora eres un Conductor.');
                    } else {
                        setCurrentStep(2);
                    }
                } else {
                    setCurrentStep(1);
                }
            } catch (error) {
                console.error(error);
            }
        };

        checkVehicleAndLicense();
    }, [profile.profile_id]);

    useEffect(() => {
        if (vehicleDetails && !licenseDetails) {
            setCurrentStep(2);
            Alert.alert('Atención', 'Aún no ha llenado la información de la licencia. Por favor, complete los datos.');
        }
    }, [vehicleDetails]);

    const handleVehicleSubmit = async (details) => {
        try {
            const data = await insertVehicle(details);
            setVehicleDetails(details);
            setCurrentStep(2);
        } catch (error) {
            Alert.alert('Error', 'No se pudo registrar el vehículo. Inténtalo de nuevo.');
        }
    };

    const handleLicenseSubmit = async (details) => {
        try {
            await insertLicense(details);
            setLicenseDetails(details);
            await updateProfileType(profile.user_id);
            router.push('/profile')
            Alert.alert('Éxito', 'Registro de vehículo y licencia completado. Ahora eres un Conductor.');
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'No se pudo registrar la licencia. Inténtalo de nuevo.');
        }
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
