import { StyleSheet } from 'react-native';
import Login from '../screens/Login';
import RegisterForm from '../screens/RegisterForm'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function RootNavigator() {
    return (
        <NavigationContainer style={styles.container}>
            <Stack.Navigator initialRouteName='Login' >
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='RegisterForm' component={RegisterForm} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
});