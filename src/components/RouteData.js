import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { EvilIcons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import colors from "../constants/colors";
import { Link } from "expo-router";
import { formatNumber } from "../utils/formatNumbers";

export default function RouteDataComponent({ data }) {
    return (
        <Link href={`/trips/${data.id}`} asChild>
            <Pressable style={styles.routeDataContainer}>
                <View style={[styles.title, styles.info]}>
                    <EvilIcons name="location" size={24} color="black" />
                    <Text style={[styles.infoText, styles.infoTextTitle]}>{data.origin} - {data.destination}</Text>
                </View>
                <AntDesign name="arrowright" size={28} color={colors.PRIMARY_COLOR} style={styles.rightArrow} />
                <View style={[styles.hourInfo, styles.info]}>
                    <EvilIcons name="clock" size={24} color="black" style={styles.infoIcon} />
                    <Text style={styles.infoText}>{data.approximateDepartureTime}</Text>
                </View>
                <View style={[styles.priceInfo, styles.info]}>
                    <MaterialIcons name="attach-money" size={24} color="black" style={styles.infoIcon} />
                    <Text style={[styles.infoText, styles.priceInfoText]}>{formatNumber(data.approximatePrice)}</Text>
                </View>
                <View style={[styles.ratingInfo, styles.info]}>
                    <EvilIcons name="star" size={24} color="black" style={styles.infoIcon} />
                    <Text style={styles.infoText}>{data.driverRating} / 5.0 - {data.numberOfOpinios} opiniones</Text>
                </View>
                <View style={styles.driverInfoSection}>
                    <View style={styles.driverPhoto}>

                    </View>
                    <View style={styles.driverInfo}>
                        <Text style={styles.driverNames}>{data.driverFirstName} {data.driverFirstLastName}</Text>
                        <Text style={styles.driverAge}>{data.driverAge} años</Text>
                    </View>
                </View>

            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    routeDataContainer: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        padding: 20,
        paddingBottom: 40,
        marginTop: 2
    },
    title: {
        alignSelf: 'center',
        marginBottom: 20,
    },
    infoTextTitle: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    info: {
        flexDirection: 'row',
        paddingBottom: 10
    },
    infoText: {
        fontSize: 15,
        paddingLeft: 5
    },
    priceInfoText: {
        fontWeight: 'bold'
    },
    rightArrow: {
        position: 'absolute',
        right: 15,
        top: 20
    },
    infoIcon: {
        top: -1
    },
    driverInfoSection: {
        position: 'absolute',
        right: '7%',
        top: '40%'
    },
    driverPhoto: {
        backgroundColor: colors.BACKGROUND_GRAY,
        height: 80,
        width: 80,
        borderRadius: 50,
        alignSelf: 'center'
    },
    driverInfo: {
        alignContent: 'center',
    },
    driverNames: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        width: 100
    },
    driverAge: {
        textAlign: 'center',
        fontSize: 15
    }
})