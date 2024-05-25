import { FontAwesome } from '@expo/vector-icons';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { useColorScheme, Text, StyleSheet } from 'react-native';
import AuthProvider, { useAuth } from '../providers/AuthProvider';



export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const { session, initialized } = useAuth()
    const segments = useSegments()

    const [loaded, error] = useFonts({
        Inter_Regular: require('../../assets/fonts/Inter-Regular.ttf'),
        Inter_Light: require('../../assets/fonts/Inter-Light.ttf'),
    });

    useEffect(() => {
        console.log(segments);
        if (!initialized) return;

        const inProfileGroup = segments[0] === '(tabs)/profile';

        if (session && !inProfileGroup) {
            router.replace('/Login')
        }
    }, [session, initialized]);

    return <RootLayoutNav />;
}

function RootLayoutNav() {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
            <AuthProvider>
                <Stack>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen name="(account)" options={{ headerShown: false }} />
                </Stack>
            </AuthProvider>

        </ThemeProvider>
    );
}
