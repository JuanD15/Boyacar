import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { EvilIcons, AntDesign, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import colors from "../constants/colors";
import { Link } from "expo-router";
import { formatNumber } from "../utils/formatNumbers";

export default function RouteDataComponent({ data }) {
    console.log(data);
    return (
        <Link href={`/trips/${data.id}`} asChild>
            <Pressable style={styles.routeDataContainer}>
                <View style={[styles.title, styles.info]}>
                    <EvilIcons name="location" size={24} color="black" />
                    <Text style={[styles.infoText, styles.infoTextTitle]}>{data.city_origin} - {data.city_destiny}</Text>
                </View>
                <AntDesign name="arrowright" size={28} color={colors.PRIMARY_COLOR} style={styles.rightArrow} />
                <View style={[styles.hourInfo, styles.info]}>
                    <EvilIcons name="clock" size={24} color="black" style={styles.infoIcon} />
                    <Text style={styles.infoText}>{data.date_time_departure}</Text>
                </View>
                <View style={[styles.priceInfo, styles.info]}>
                    <MaterialIcons name="attach-money" size={24} color="black" style={styles.infoIcon} />
                    <Text style={[styles.infoText, styles.priceInfoText]}>{formatNumber(data.cost)}</Text>
                </View>
                <View style={[styles.ratingInfo, styles.info]}>
                    <EvilIcons name="star" size={24} color="black" style={styles.infoIcon} />
                    <Text style={styles.infoText}>{data.driverRating} / 5.0 - {data.numberOfOpinios} opiniones</Text>
                </View>
                <View style={styles.driverInfoSection}>
                    {data.Profile.Person.person_photo ? (
                        <Image source={{ uri: data.Profile.Person.person_photo }} style={styles.driverPhoto} />
                    ) : (
                        <FontAwesome name="user-circle-o" size={70} color={colors.PRIMARY_COLOR} style={styles.driverPhoto} />
                    )}
                    <View style={styles.driverInfo}>
                        <Text style={styles.driverNames}>{data.Profile.Person.person_name} {data.Profile.Person.person_last_name}</Text>
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
        fontWeight: 'bold',
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
        width: 80,
        height: 80,
        borderRadius: 50,
        alignSelf: 'center',
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