import colors from './colors'

export default RegisterFormStyles = {
    container: {
        height: '100%',
        with: '100%',
    },
    formInfo: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    personalInfo: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        height: '70%',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 40,
        paddingHorizontal: 20
    },
    inputSection: {
        flexDirection: 'column'
    },
    input: {
        height: 40,
        minWidth: '40%',
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
    },
    emailInput: {
        width: '80%'
    },
    formFooter: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: colors.PRIMARY_COLOR,
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
}