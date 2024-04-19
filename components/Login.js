import { ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import colors from "../assets/colors";

export default function Login() {
    const rememberPassword = () => {
        console.log("¿Olvidaste tu contraseña");
    }
    const login = () => {
        console.log('Login');
    }

    const register = () => {
        console.log('Register');
    }

    return (
        <View style={styles.container} >
            <View style={styles.imageContainer}>
                <ImageBackground source={require('../assets/Login-bg.png')} style={styles.bgImage} />
            </View>
            <View style={styles.viewLogin}>
                <Image source={require('../assets/icon.png')} style={styles.logIcon} />
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
                <TouchableOpacity style={styles.button} onPress={login} activeOpacity={0.8}>
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
                <View style={styles.viewRegister}>
                    <Text style={styles.noAccountText}>¿No tienes una cuenta? </Text>
                    <TouchableOpacity onPress={register}>
                        <Text style={styles.registerText}>Registrate</Text>
                    </TouchableOpacity>
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
        top: -94,
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
        fontFamily: 'Inter-Regular',
        fontSize: 35,
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
        fontFamily: 'Inter-Light',
        fontSize: 17,
        height: 46,
        paddingLeft: 35,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 5,

    },
    forgetPasswordLink: {
        alignSelf: 'flex-start',
        marginTop: 50,
        marginLeft: 35
    },
    forgetPassword: {
        color: 'rgba(255,255,255,0.6)',
        fontFamily: 'Inter-Light',
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
        fontFamily: 'Inter-Light',
        fontSize: 17,
        fontWeight: 'bold',
    },
    viewRegister: {
        flexDirection: 'row',
        bottom: -120
    },
    noAccountText: {
        fontFamily: 'Inter-Light',
        color: '#fff',
        fontSize: 15

    },
    registerText: {
        fontSize: 15,
        fontFamily: 'Inter-Light',
        color: '#fff',
        textDecorationLine: 'underline'
    },

})