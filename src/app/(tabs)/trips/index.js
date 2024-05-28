import React, { useState, useEffect } from "react";
import { FlatList, StatusBar, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import RouteDataComponent from "../../../components/RouteData";
import routesData from '../../../constants/routeTestData'
import { Entypo } from '@expo/vector-icons';
import { fetchTrips } from "../../../services/TripService";
import NoTripsComponent from "../../../components/NoTripsComponent";
import Spinner from "react-native-loading-spinner-overlay";

export default function Feed() {
    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchMyTrips = async () => {
            try {
                setLoading(true)
                const trips = await fetchTrips();
                setTrips(trips.data);
            } catch (error) {
                setLoading(true)
                console.error('Error al cargar viajes:', error);
            }
        };
        fetchMyTrips()
        // console.log(trips);
    }, []);


    return (
        <View style={styles.feedContainer}>
            <StatusBar hidden={true} />
            <View style={styles.feedHeader}>
                <Entypo name="magnifying-glass" size={24} color="black" />
                <TextInput style={styles.searchBar} placeholder="Buscar..." />
                {/* <TouchableOpacity /> */}
            </View>
            {!trips ? (
                <>
                    <Spinner visible={loading} />
                    <NoTripsComponent />
                </>
            ) : (
                <FlatList
                    data={trips}
                    renderItem={({ index, item }) => (
                        <TouchableOpacity
                            onPress={() => router.push({ pathname: '/RouteDetail', params: { route: item } })}
                        >
                            <RouteDataComponent data={item} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.trip_id.toString()}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    feedContainer: {
        height: '100%',
        width: '100%',
    },
    feedHeader: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: '9.4%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchBar: {
        borderColor: 'black',
        borderWidth: 1,
        width: '60%',
        borderRadius: 20,
        paddingLeft: 20
    },


})