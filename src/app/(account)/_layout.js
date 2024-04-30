import React from 'react';
import { Stack } from 'expo-router';




export default function TabLayout() {

    return (
        <Stack>
            <Stack.Screen name="Login" options={{ headerShown: false }} />
            <Stack.Screen name="RegisterForm" options={{ headerShown: true }} />
        </Stack>
    );
}
