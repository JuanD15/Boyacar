export function validateNames(names) {
    let validationObject = { state: false, message: '' }
    const regex = /^([a-zA-Z]{2,}( [a-zA-Z]{2,})?)$/;
    if (regex.test(names) || names !== null) {
        validationObject.message = 'El nombre debe tener dos o más letras.';
        return validationObject
    }
    validationObject.state = true
    return validationObject;

}

function validarApellidos(apellidos) {
    if (!apellidos) {
        return 'El campo de apellidos es obligatorio.';
    }
    return true;
}

function validarDocumento(documento) {
    if (!documento) {
        return 'El campo de documento de identidad es obligatorio.';
    }
    return true;
}

function validarFechaNacimiento(fechaNacimiento) {
    const fechaNacimientoDate = new Date(fechaNacimiento);
    const fechaActual = new Date();
    const edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
    if (edad < 18) {
        return 'Debes tener al menos 18 años.';
    }
    return true;
}

function validarCorreo(correo) {
    const regexCorreo = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!regexCorreo.test(correo)) {
        return 'El correo no es válido.';
    }
    return true;
}

function validarTelefono(telefono) {
    const regexTelefono = /^[0-9]{10}$/;
    if (!regexTelefono.test(telefono)) {
        return 'El teléfono no es válido.';
    }
    return true;
}

function validarPassword(password) {
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!regexPassword.test(password)) {
        return 'La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula y un número.';
    }
    return true;
}

function validarRepeatPassword(password, repeatPassword) {
    if (password !== repeatPassword) {
        return 'Las contraseñas no coinciden.';
    }
    return true;
}
