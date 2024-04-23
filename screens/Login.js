import { ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import LoginStyles from "../assets/styles/LoginStyles";

export default function Login(props) {
    const { navigation } = props;

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
            <View style={styles.imageContainer}>
                <ImageBackground source={require('../assets/img/Login-bg.png')} style={styles.bgImage} />
            </View>
            <View style={styles.viewLogin}>
                <Image source={require('../assets/img/icon.png')} style={styles.logIcon} />
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
                <TouchableOpacity style={styles.button} onPress={()=>console.log('Esta opción aún no esta disponible')} activeOpacity={0.8}>
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

const styles = StyleSheet.create(LoginStyles)