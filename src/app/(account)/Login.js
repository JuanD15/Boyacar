import { ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, StatusBar } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import colors from '../../constants/colors';
import { Link } from "expo-router";

export default function Login() {

    const rememberPassword = () => {
        console.log("¿Olvidaste tu contraseña");
    }
    const login = () => {
        console.log('Login');
    }

    const register = () => {
        console.log('Register');
        navigation.navigate('RegisterForm')
    }


    return (
        <View style={styles.container} >
            <StatusBar translucent={true} />
            <Link href={'/'} asChild>
                <TouchableOpacity style={styles.closeIcon} >
                    <AntDesign name="close" size={30} color={'white'} />
                </TouchableOpacity>
            </Link >
            <View style={styles.imageContainer}>
                <ImageBackground source={require('../../../assets/images/Login-bg.png')} style={styles.bgImage} />
            </View>
            <View style={styles.viewLogin}>
                <Image source={require('../../../assets/images/icon.png')} style={styles.logIcon} />
                <Text style={styles.title}>Iniciar Sesión</Text>
                <View style={styles.viewInputs}>
                    <TextInput
                        placeholder="Nombre o Correo"
                        placeholderTextColor='rgba(255,255,255,0.6)'
                        style={styles.input} />
                    <TextInput
                        placeholder="Contraseña"
                        placeholderTextColor='rgba(255,255,255,0.6)'
                        keyboardType='visible-password'
                        style={styles.input} />
                </View>
                <TouchableOpacity style={styles.forgetPasswordLink} onPress={rememberPassword}>
                    <Text style={styles.forgetPassword}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => console.log('Esta opción aún no esta disponible')} activeOpacity={0.8}>
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
                <View style={styles.viewRegister}>
                    <Text style={styles.noAccountText}>¿No tienes una cuenta? </Text>
                    <Link href={'/RegisterForm'}>
                        <Text style={styles.registerText}>Registrate</Text>
                    </Link>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flex: 1
    },
    closeIcon: {
        position: 'absolute',
        zIndex: 10,
        top: 35,
        right: 25,
    },
    imageContainer: {
        width: '100%',
        height: '45%'
    },
    bgImage: {
        width: '100%',
        height: '100%'
    },
    logIcon: {
        position: 'absolute',
        top: -93,
        width: 150,
        height: 150,
        alignSelf: 'center',
    },
    viewLogin: {
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        backgroundColor: colors.PRIMARY_COLOR,
        width: '100%',
        height: '65%',
        alignItems: 'center',
    },

    title: {
        color: '#fff',
        marginTop: 71,
        fontFamily: 'Inter_Regular',
        fontSize: 35,
        width: '100%',
        textAlign: 'center'
    },
    viewInputs: {
        top: 50,
        width: '82%',
        height: 128,
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
    },
    input: {
        fontFamily: 'Inter_Light',
        fontSize: 15,
        height: 46,
        paddingLeft: 35,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 5,
        color: '#2d2d2d'
    },
    forgetPasswordLink: {
        alignSelf: 'flex-start',
        marginTop: 50,
        marginLeft: 35,

    },
    forgetPassword: {
        color: 'rgba(255,255,255,0.6)',
        fontFamily: 'Inter_Light',
        fontSize: 15
    },
    button: {
        backgroundColor: colors.RED_COLOR,
        borderRadius: 10,
        width: 320,
        height: 46,
        alignItems: 'center',
        justifyContent: 'center',
        top: 60
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Inter_Light',
        fontSize: 17,
        fontWeight: 'bold',
    },
    viewRegister: {
        flexDirection: 'row',
        bottom: -130
    },
    noAccountText: {
        fontFamily: 'Inter_Light',
        color: '#fff',
        fontSize: 15

    },
    registerText: {
        fontSize: 15,
        fontFamily: 'Inter_Light',
        color: '#fff',
        textDecorationLine: 'underline'
    },
})