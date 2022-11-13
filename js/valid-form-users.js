$("#send").on("click", () => {
    validNombres();
    validApellidos();
    validDNI();
    validEmail();
    validPassword();

    $("#fecha-nacimiento").addClass('is-valid');
});

const validNombres = () => {
    const nombres = $("#nombres").val();
    if (nombres.length > 0 && nombres.length <= 75) {
        makeValidMessage('text-success', 'El nombre del usuario es valido', '#valid-nombres');
        $("#nombres").removeClass('is-invalid');
        $("#nombres").addClass('is-valid');
    }else {
        makeValidMessage('text-danger', 'Por favor ingrese el nombre del usuario', '#valid-nombres');
        $("#nombres").removeClass('is-valid');
        $("#nombres").addClass('is-invalid');
    }
}

const validApellidos = () => {
    const apellidos = $("#apellidos").val();
    if (apellidos.length > 0 && apellidos.length <= 75) {
        makeValidMessage('text-success', 'El apellido del usuario es valido', '#valid-apellidos');
        $("#apellidos").removeClass('is-invalid');
        $("#apellidos").addClass('is-valid');
    }else {
        makeValidMessage('text-danger', 'Por favor ingrese el apellido del usuario', '#valid-apellidos');
        $("#apellidos").removeClass('is-valid');
        $("#apellidos").addClass('is-invalid');
    }
}

const validDNI = () => {
    const dni = $("#dni").val();
    if (dni.match('^[0-9]{8}-[0-9]{1}$') !== null) {
        makeValidMessage('text-success', 'El dni del usuario es valido', '#valid-dni');
        $("#dni").removeClass('is-invalid');
        $("#dni").addClass('is-valid');
    }else {
        makeValidMessage('text-danger', 'EL dni del usuario debe tener la forma 00000000-0', '#valid-dni');
        $("#dni").removeClass('is-valid');
        $("#dni").addClass('is-invalid');
    }
}

const validEmail = () => {
    const email = $("#email").val();
    if (email.length > 0 && email.length <= 75) {
        makeValidMessage('text-success', 'El email del usuario es valido', '#valid-email');
        $("#email").removeClass('is-invalid');
        $("#email").addClass('is-valid');
    }else {
        makeValidMessage('text-danger', 'Por favor ingrese el email del usuario', '#valid-email');
        $("#email").removeClass('is-valid');
        $("#email").addClass('is-invalid');
    }
}

const validPassword = () => {
    const password = $("#password").val();
    if (password.length > 0 && password.length <= 75) {
        makeValidMessage('text-success', 'El password del usuario es valido', '#valid-password');
        $("#password").removeClass('is-invalid');
        $("#password").addClass('is-valid');
    }else {
        makeValidMessage('text-danger', 'Por favor ingrese el password del usuario', '#valid-password');
        $("#password").removeClass('is-valid');
        $("#password").addClass('is-invalid');
    }
}

const makeValidMessage = (classMessage, textMessage, validBoxMessage) => {
    $(validBoxMessage).removeClass();
    $(validBoxMessage).addClass(classMessage);
    $(validBoxMessage).html(textMessage);
}