$("#send").on("click", () => {
    validNombre();
    validEmail();
    validGender();
});

const validNombre = () => {
    const nombre = $("#nombre").val();
    if (nombre.length > 0 && nombre.length <= 75) {
        makeValidMessage('text-success', 'El nombre del usuario es valido', '#valid-nombre');
        $("#nombre").removeClass('is-invalid');
        $("#nombre").addClass('is-valid');
    }else {
        makeValidMessage('text-danger', 'Por favor ingrese el nombre del usuario', '#valid-nombre');
        $("#nombre").removeClass('is-valid');
        $("#nombre").addClass('is-invalid');
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

const validGender = () => {
    const masculino = $("#masculino");
    const femenino = $("#femenino");
    
    if (masculino.is(':checked') || femenino.is(':checked') ) {
        makeValidMessage('text-success', 'Genero seleccionado correctamente', '#valid-gender');
    } else {
        makeValidMessage('text-danger', 'Por favor seleccione el genero', '#valid-gender');
    }
}

const makeValidMessage = (classMessage, textMessage, validBoxMessage) => {
    $(validBoxMessage).removeClass();
    $(validBoxMessage).addClass(classMessage);
    $(validBoxMessage).html(textMessage);
}