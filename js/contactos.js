class Formulario {
    constructor (nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    }
}

//OBTENGO EL NODO DE CONFIRMACION DEL FORMULARIO
let confirmacion = document.getElementById("okFormulario");
confirmacion.addEventListener("click",envioConfirmacion);

function envioConfirmacion () {
    let nombre = document.getElementById("infoName").value;
    let apellido = document.getElementById("infoApellido").value;
    let email = document.getElementById("infoMail").value;
    let formulario1 = new Formulario (nombre,apellido,email);
    alertaConfirmacion(formulario1);
}
//BORRO EL CONTENIDO DEL HTML PARA PODER DAR EL MENSAJE DE BIENVENIDA
const contenedor1 = document.getElementById("borrar");
function alertaConfirmacion (formulario) {
    let limpia = document.getElementById("borrar");
    limpia.innerHTML = "";
    //CREO UN NUEVO DIV Y PASO EL MENSAJE DE BIENVENIDA
    let mensajeFormulario = document.createElement("div");
    mensajeFormulario.className = "claseFormulario";
    mensajeFormulario.innerHTML = `Hola ${formulario.nombre} ${formulario.apellido} 
                        en unos instantes recibirás un correo electrónico
                        en tu casilla ${formulario.email} confirmando tu subscripción.
                        Muchas gracias por elegirnos!!`;
    contenedor1.appendChild(mensajeFormulario);
}