import React from "react";
import { FlatList, StatusBar, StyleSheet, View, TextInput } from "react-native";
import RouteDataComponent from "../../../components/RouteData";
import routesData from '../../../constants/routeTestData'
import showTrips from '../../../services/TripsListService';
import { Entypo } from '@expo/vector-icons';

export default function Feed() {
    return (
        <View style={styles.feedContainer}>
            <StatusBar hidden={true} />
            <View style={styles.feedHeader}>
                <Entypo name="magnifying-glass" size={24} color="black" />
                <TextInput style={styles.searchBar} placeholder="Buscar..." />
                {/* <TouchableOpacity /> */}
            </View>
            <FlatList
                data={showTrips}
                renderItem={({ index, item }) => (
                    <RouteDataComponent data={item} />
                )}
            />
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