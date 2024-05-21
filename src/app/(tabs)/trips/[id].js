import { Stack, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../../../constants/colors";
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';
import routesData from '../../../constants/routeTestData';
import vehicles from "../../../constants/vehicleTestData";
import Counter from "../../../components/Counter";
import { formatNumber } from "../../../utils/formatNumbers";
import { prettyDate } from "../../../utils/FormatDate";

export default function RouteDetail() {
    const [selectedValue, setSelectedValue] = useState(0);
    const [value, setValue] = useState(1);

    const { id } = useLocalSearchParams();

    const route = routesData.find(r => r.id.toString() === id)
    const vehicle = vehicles.find(v => v.id.toString() === id)

    if (!route) {
        return <Text>Ruta no encontrada</Text>
    }

    return (
        <View style={{ height: '100%' }}>
            <Stack.Screen options={{ title: route.origin + ' - ' + route.destination, headerTintColor: 'white', headerStyle: { backgroundColor: colors.PRIMARY_COLOR, height: 200 } }} />
            <View style={styles.driverInfoSection}>
                <View style={styles.driverPhoto}>

                </View>
                <View style={styles.driverInfo}>
                    <Text style={styles.driverPersonalInfo}>{route.driverFirstName} {route.driverFirstLastName} ({route.driverAge} años)</Text>
                    <View>
                        <Text style={styles.driverRating}><FontAwesome name="star" size={20} color={colors.PRIMARY_COLOR} />   {route.driverRating}/5.0 - {route.numberOfOpinios} opiniones</Text>
                    </View>
                </View>
            </View>
            <View style={styles.departureInfoSection}>
                <Text style={styles.infoTitle}>{prettyDate(route.departureDate)}</Text>
                <View style={styles.container}>
                    <Entypo name="flow-line" size={100} color={colors.PRIMARY_COLOR} style={{ paddingVertical: 5 }} />
                    <View style={{ justifyContent: 'space-between' }}>
                        <View style={styles.routePlace}>
                            <Text style={[styles.departureCity, styles.routePlace]}>{route.origin}</Text>
                            <Text style={styles.departureCityAddress}>Plaza principal</Text>
                        </View>
                        <View style={styles.routePlace}>
                            <Text style={[styles.arriveCity, styles.routePlace]}>{route.destination}</Text>
                            <Text style={styles.departureCityAddress}>Plaza principal</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.vehicleInfoSection}>
                <Text style={styles.infoTitle}>Vehiculo</Text>
                <View style={styles.vehicleInfo}>
                    <View style={styles.vehicleDetail}>
                        <Text style={styles.infoTitle}>Marca:</Text>
                        <Text>{vehicle.brand}</Text>
                    </View>
                    <View style={styles.vehicleDetail}>
                        <Text style={styles.infoTitle}>Modelo:</Text>
                        <Text>{vehicle.model}</Text>
                    </View>
                    <View style={styles.vehicleDetail}>
                        <Text style={styles.infoTitle}>Año:</Text>
                        <Text>{vehicle.year}</Text>
                    </View>
                    <View style={styles.vehicleDetail}>
                        <Text style={styles.infoTitle}>Placa:</Text>
                        <Text>{vehicle.licensePlate}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.reserveSeats}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Reservar asientos</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Counter max={route.freeSeats} value={value} setValue={setValue} />
                    <Text style={{ fontSize: 15, }}> de {route.freeSeats}</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.priceInfo}>
                    <MaterialIcons name="attach-money" size={30} color="black" style={styles.moneyIcon} />
                    <Text style={styles.priceValue}>{formatNumber(value * route.approximatePrice)}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => console.log('Reservar cupo(s)')} activeOpacity={0.8}>
                    <Text style={styles.buttonText}>Reservar cupo(s)</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    driverInfoSection: {
        flexDirection: 'row',
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomColor: 'rgba(182,182,182,.3)',
        borderBottomWidth: 1,
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
    driverPersonalInfo: {
        fontWeight: 'bold',
        fontSize: 15
    },
    driverRating: {
        fontSize: 15,
    },
    departureInfoSection: {
        paddingVertical: 25,
        marginHorizontal: 20,
        borderBottomColor: 'rgba(182,182,182,.3)',
        borderBottomWidth: 1,
    },
    container: {
        flexDirection: 'row',
        marginVertical: 30
    },
    routePlace: {
        fontWeight: 'bold',
        fontSize: 15
    },
    vehicleInfoSection: {
        paddingVertical: 20,
        marginHorizontal: 20
    },
    vehicleInfo: {
        padding: 25
    },
    vehicleDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    reserveSeats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    footer: {
        width: '100%',
        height: '9.5%',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
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
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white'
    }
})