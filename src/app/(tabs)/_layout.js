import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import colors from '../../constants/colors'
import { View, StyleSheet } from 'react-native';
import { useSegments } from 'expo-router';

// export const unstable_settings = {
//     // Ensure that reloading on `/modal` keeps a back button present.
//     initialRouteName: '/feed',
// };


export default function TabLayout() {
    const segment = useSegments();
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: colors.PRIMARY_COLOR, tabBarStyle: { height: '7%', display: segment[2] === "[id]" ? 'none' : 'flex' }, tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' }, tabBarHideOnKeyboard: true }}>
            <Tabs.Screen name='trips' options={{
                headerShown: false,

                tabBarIcon: ({ color, focused }) => (
                    <View style={styles.tabContainer(focused)}>
                        <FontAwesome name="automobile" size={23} color={color} />
                    </View>
                ),
                tabBarLabel: 'Rutas',
            }}
            />

            <Tabs.Screen name='profile' options={{
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <View style={styles.tabContainer(focused)}>
                        <Entypo name="user" size={23} color={color} />
                    </View>
                ),
                tabBarLabel: 'Perfil',
            }}
            />

            <Tabs.Screen name='index' options={{ href: null }} />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    tabContainer: (focused) => ({
        borderTopWidth: focused ? 2 : 0,
        borderColor: focused ? colors.PRIMARY_COLOR : 'transparent',
        width: '100%',
        alignItems: 'center',
        paddingTop: 10
    })
})