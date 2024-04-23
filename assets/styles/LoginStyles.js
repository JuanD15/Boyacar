import colors from './colors'

export default LoginStyles = {
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
        fontFamily: 'Inter_400Regular',
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
        fontFamily: 'Inter_300Light',
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
        fontFamily: 'Inter_300Light',
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
        fontFamily: 'Inter_300Light',
        fontSize: 17,
        fontWeight: 'bold',
    },
    viewRegister: {
        flexDirection: 'row',
        bottom: -130
    },
    noAccountText: {
        fontFamily: 'Inter_300Light',
        color: '#fff',
        fontSize: 15

    },
    registerText: {
        fontSize: 15,
        fontFamily: 'Inter_300Light',
        color: '#fff',
        textDecorationLine: 'underline'
    },

}