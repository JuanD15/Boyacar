import { Stack, useLocalSearchParams } from "expo-router";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
import colors from "../../../constants/colors";
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';
import Counter from "../../../components/Counter";
import { calculateRating, formatNumber } from "../../../utils/formatNumbers";
import { calculateAge, getTwelveHoursDate, prettyDate } from "../../../utils/FormatDate";
import { Shadow } from "react-native-shadow-2";
import { fetchTripWithID } from "../../../services/TripService";
import { getFirstName } from "../../../utils/FormatText";
import Spinner from "react-native-loading-spinner-overlay";
import LoadingPage from "./LoadingPage";


export default function RouteDetail() {
    const [selectedValue, setSelectedValue] = useState(0);
    const [value, setValue] = useState(1);
    const [loading, setLoading] = useState(false);

    const { id } = useLocalSearchParams();

    const screenWidth = Dimensions.get("window").width
    const screenHeight = Dimensions.get("window").height

    const [trip, setTrip] = useState();

    useEffect(() => {
        const fetchMyTrip = async () => {
            setLoading(true)
            try {
                const trip = await fetchTripWithID(id);
                setTrip(trip);
            } catch (error) {
                setLoading(false)
                console.error('Error al cargar viaje:', error);
            }
        };
        fetchMyTrip()
    }, []);

    if (!trip) {
        return <LoadingPage loading={loading} />
    }

    return (
        <View style={{ height: '100%' }}>
            <Stack.Screen options={{ title: trip.city_origin + ' - ' + trip.city_destiny, headerTintColor: 'white', headerStyle: { backgroundColor: colors.PRIMARY_COLOR, height: 200 } }} />
            <View style={styles.driverInfoSection}>
                <View style={styles.driverPhoto}>

                </View>
                <View style={styles.driverInfo}>
                    <Text style={styles.infoTitle}>{getFirstName(trip.Profile.Person.person_name)} {getFirstName(trip.Profile.Person.person_last_name)} ({calculateAge(trip.Profile.Person.birth_date)} años)</Text>
                    <View>
                        <Text style={styles.driverRating}><FontAwesome name="star" size={20} color={colors.PRIMARY_COLOR} /> {trip.Rating[0] ? (calculateRating(trip.Rating).average) : ('0.0')} / 5.0 - {calculateRating(trip.Rating).opinions} opiniones</Text>
                    </View>
                </View>
            </View>
            <View style={styles.infoSection}>
                <Text style={styles.infoTitle}>{prettyDate(trip.date_time_departure)}</Text>
                <View style={styles.container}>
                    <Entypo name="flow-line" size={100} color={colors.PRIMARY_COLOR} style={{ paddingVertical: 5 }} />
                    <View style={{ justifyContent: 'space-evenly' }}>
                        <View>
                            <Text style={styles.infoTitle}>{trip.city_origin} - {getTwelveHoursDate(trip.date_time_departure)}</Text>
                            <Text >{trip.address}</Text>
                        </View>
                        <View >
                            <Text style={styles.infoTitle}>{trip.city_destiny}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.infoSection}>
                <Text style={styles.infoTitle}>Vehiculo</Text>
                <View style={styles.vehicleInfo}>
                    <View style={styles.vehicleDetail}>
                        <Text style={styles.infoTitle}>Marca:</Text>
                        <Text>{trip.Vehicle.Manufacturer.mark}</Text>
                    </View>
                    <View style={styles.vehicleDetail}>
                        <Text style={styles.infoTitle}>Linea:</Text>
                        <Text>{trip.Vehicle.Manufacturer.line}</Text>
                    </View>
                    <View style={styles.vehicleDetail}>
                        <Text style={styles.infoTitle}>Modelo:</Text>
                        <Text>{trip.Vehicle.Manufacturer.model}</Text>
                    </View>
                    <View style={styles.vehicleDetail}>
                        <Text style={styles.infoTitle}>Placa:</Text>
                        <Text>{trip.vehicle_id}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.infoSection}>
                <View style={styles.seatsInfo}>
                    <Text style={styles.infoTitle}>Total de cupos:</Text>
                    <Text style={{ paddingRight: 35 }}>{trip.available_seats}</Text>
                </View>
                <View style={styles.seatsInfo}>
                    <Text style={styles.infoTitle}>Reservar asientos</Text>
                    <Counter max={trip.available_seats} value={value} setValue={setValue} />
                </View>
            </View>
            <View style={styles.shadowContainer}>
                <Shadow startColor="rgba(0,0,0,0.03)" >
                    <View style={[styles.footer, { width: screenWidth, height: screenHeight * 0.095 }]}>
                        <View style={styles.priceInfo}>
                            <MaterialIcons name="attach-money" size={30} color="black" style={styles.moneyIcon} />
                            <Text style={styles.priceValue}>{formatNumber(value * trip.cost)}</Text>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={() => console.log('Reservar cupo(s)')} activeOpacity={0.8}>
                            <Text style={[styles.buttonText, styles.infoTitle]}>Reservar cupo(s)</Text>
                        </TouchableOpacity>
                    </View>
                </Shadow>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    driverInfoSection: {
        flexDirection: 'row',
        paddingVertical: 20,
        marginHorizontal: 20,
    },
    infoTitle: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    driverPhoto: {
        backgroundColor: colors.BACKGROUND_GRAY,
        height: 80,
        width: 80,
        borderRadius: 50,
        borderColor: colors.PRIMARY_COLOR_DARK,
        borderWidth: 1
    },
    driverInfo: {
        justifyContent: 'center',
        paddingLeft: 15,
    },
    driverRating: {
        fontSize: 15,
    },
    infoSection: {
        paddingVertical: 20,
        marginHorizontal: 20,
        borderTopColor: 'rgba(182,182,182,.3)',
        borderTopWidth: 1,
    },
    seatsInfo: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    container: {
        flexDirection: 'row',
        marginVertical: 30
    },
    vehicleInfo: {
        padding: 25
    },
    vehicleDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    shadowContainer: {
        position: 'absolute',
        bottom: 0
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,

    },
    priceInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    priceValue: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: colors.PRIMARY_COLOR,
        width: '39.23%',
        height: '75%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white'
    }
})