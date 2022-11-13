//validacion al precionar enviar
$("#send").on("click", () => {
    validProduct();
    validCodigo();
    validExistencias();
    validPrecio();
});

const validProduct = () => {
    const producto = $("#producto").val();
    if (producto.length > 0 && producto.length <= 50) {
        makeValidMessage('text-success', 'El nombre del producto es valido', '#valid-producto');
        $("#producto").removeClass('is-invalid');
        $("#producto").addClass('is-valid');
    }else {
        makeValidMessage('text-danger', 'El nombre del producto debe medir entre 1 y 50', '#valid-producto');
        $("#producto").removeClass('is-valid');
        $("#producto").addClass('is-invalid');
    }
}

const validCodigo = () => {
    const codigo = $("#codigo").val();
    if (codigo.length > 0 && codigo.length <= 50) {
        makeValidMessage('text-success', 'El código de barras del producto es valido', '#valid-codigo');
        $("#codigo").removeClass('is-invalid');
        $("#codigo").addClass('is-valid');
    }else {
        makeValidMessage('text-danger', 'El código de barras del producto debe medir entre 1 y 50', '#valid-codigo');
        $("#codigo").removeClass('is-valid');
        $("#codigo").addClass('is-invalid');
    }
}

const validExistencias = () => {
    const existencia = $("#existencia").val();
    if (parseInt(existencia) > 0) {
        makeValidMessage('text-success', 'La existencia ingresada es valida', '#valid-existencia');
        $("#existencia").removeClass('is-invalid');
        $("#existencia").addClass('is-valid');
    }else {
        makeValidMessage('text-danger', 'Debes de especificar la existencia', '#valid-existencia');
        $("#existencia").removeClass('is-valid');
        $("#existencia").addClass('is-invalid');
    }
}

const validPrecio = () => {
    const precio = $("#precio").val();
    if (parseInt(precio) > 0) {
        makeValidMessage('text-success', 'La precio ingresado es valido', '#valid-precio');
        $("#precio").removeClass('is-invalid');
        $("#precio").addClass('is-valid');
    }else {
        makeValidMessage('text-danger', 'Debes de especificar el precio', '#valid-precio');
        $("#precio").removeClass('is-valid');
        $("#precio").addClass('is-invalid');
    }
}

const makeValidMessage = (classMessage, textMessage, validBoxMessage) => {
    $(validBoxMessage).removeClass();
    $(validBoxMessage).addClass(classMessage);
    $(validBoxMessage).html(textMessage);
}