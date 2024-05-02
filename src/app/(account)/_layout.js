import React from 'react';
import { Stack } from 'expo-router';
import colors from '../../constants/colors';




export default function TabLayout() {

    return (
        <Stack>
            <Stack.Screen name="Login" options={{ headerShown: false }} />
            <Stack.Screen name="RegisterForm" options={{ headerTitle: 'Información personal', headerTintColor: 'white', headerStyle: { backgroundColor: colors.PRIMARY_COLOR } }} />
        </Stack>
    );
}
