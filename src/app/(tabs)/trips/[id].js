import { Stack, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
import colors from "../../../constants/colors";
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';
import routesData from '../../../constants/routeTestData';
import vehicles from "../../../constants/vehicleTestData";
import Counter from "../../../components/Counter";
import { formatNumber } from "../../../utils/formatNumbers";
import { prettyDate } from "../../../utils/FormatDate";
import { Shadow } from "react-native-shadow-2";

export default function RouteDetail() {
    const [selectedValue, setSelectedValue] = useState(0);
    const [value, setValue] = useState(1);

    const screenWidth = Dimensions.get("window").width
    const screenHeight = Dimensions.get("window").height

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
                    <Text style={styles.infoTitle}>{route.driverFirstName} {route.driverFirstLastName} ({route.driverAge} años)</Text>
                    <View>
                        <Text style={styles.driverRating}><FontAwesome name="star" size={20} color={colors.PRIMARY_COLOR} />   {route.driverRating}/5.0 - {route.numberOfOpinios} opiniones</Text>
                    </View>
                </View>
            </View>
            <View style={styles.infoSection}>
                <Text style={styles.infoTitle}>{prettyDate(route.departureDate)}</Text>
                <View style={styles.container}>
                    <Entypo name="flow-line" size={100} color={colors.PRIMARY_COLOR} style={{ paddingVertical: 5 }} />
                    <View style={{ justifyContent: 'space-between' }}>
                        <View>
                            <Text style={styles.infoTitle}>{route.origin}</Text>
                            <Text >Plaza principal</Text>
                        </View>
                        <View >
                            <Text style={styles.infoTitle}>{route.destination}</Text>
                            <Text >Plaza principal</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.infoSection}>
                <Text style={styles.infoTitle}>Vehiculo</Text>
                <View style={styles.vehicleInfo}>
                    <View style={styles.vehicleDetail}>
                        <Text style={styles.infoTitle}>Marca:</Text>
                        <Text>{vehicle.brand}</Text>
                    </View>
                    <View style={styles.vehicleDetail}>
                        <Text style={styles.infoTitle}>Linea:</Text>
                        <Text>{vehicle.line}</Text>
                    </View>
                    <View style={styles.vehicleDetail}>
                        <Text style={styles.infoTitle}>Modelo:</Text>
                        <Text>{vehicle.model}</Text>
                    </View>
                    <View style={styles.vehicleDetail}>
                        <Text style={styles.infoTitle}>Placa:</Text>
                        <Text>{vehicle.licensePlate}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.infoSection}>
                <View style={styles.seatsInfo}>
                    <Text style={styles.infoTitle}>Total de cupos:</Text>
                    <Text style={{ paddingRight: 35 }}>{route.freeSeats}</Text>
                </View>
                <View style={styles.seatsInfo}>
                    <Text style={styles.infoTitle}>Reservar asientos</Text>
                    <Counter max={route.freeSeats} value={value} setValue={setValue} />
                </View>
            </View>
            <View style={styles.shadowContainer}>
                <Shadow startColor="rgba(0,0,0,0.03)" >
                    <View style={[styles.footer, { width: screenWidth, height: screenHeight * 0.095 }]}>
                        <View style={styles.priceInfo}>
                            <MaterialIcons name="attach-money" size={30} color="black" style={styles.moneyIcon} />
                            <Text style={styles.priceValue}>{formatNumber(value * route.approximatePrice)}</Text>
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
        // borderBottomColor: 'rgba(182,182,182,.3)',
        // borderBottomWidth: 1,
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