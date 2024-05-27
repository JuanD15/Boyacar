import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack, router, useSegments } from 'expo-router';
import { Text, useColorScheme } from 'react-native';
import AuthProvider, { useAuth } from '../providers/AuthProvider';
import { useEffect } from 'react';

// export {
//     // Catch any errors thrown by the Layout component.
//     ErrorBoundary,
// } from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    return (
        <AuthProvider>
            <RootLayoutNav />
        </AuthProvider>
    );
}

function RootLayoutNav() {
    const colorScheme = useColorScheme();
    const { session, profile } = useAuth();

    const segments = useSegments()


    useEffect(() => {
        if (segments[1] === 'trips') {
            router.push('Login')
        }
    }, []);

    useEffect(() => {
        console.log(segments);
        if (segments[1] === 'profile' && !session) {
            console.log('session', session);
            router.push('/Login')
        }
        if (session) {
            router.push('/(tabs)/profile/')
        }

    }, [session, profile])
    // if (!initialized) {
    //     return <Text>Loading...</Text>;
    // }

    return (
        <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="(account)" options={{ headerShown: false }} />
            </Stack>
        </ThemeProvider>
    );
}
