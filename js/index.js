// GENERO UN ARRAY DONDE CARGAR TODOS LOS USUARIOS DE LA PAGINA
let arrayUsuarios = []; 

// CON UNA CLASE Y UNA FUNCION VOY GENERARNDO AUTOMATICAMENTE CADA OBJETO CON LA INFORMACION DE CADA USUARIO NUEVO QUE SE CREA
class Usuario {
    constructor (nombre, apellido, password, mail) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.password = password;
        this.mail = mail;
    }
}

function cargarUsuarios (arrayUsuarios) {
    let nombre = prompt("Por favor ingrese su nombre");
    let apellido = prompt("Por favor ingrese su apellido");
    let password = prompt("Por favor ingrese su password");
    let mail = prompt("Por favor ingrese su mail");
    const nuevoUsuario = new Usuario(nombre, apellido, password, mail);
    arrayUsuarios.push(nuevoUsuario);
}

//LAS OPCIONES DE CARGA O RECUPERACION DE DATOS PARA LOS USUARIOS 
let ingreso = prompt("Por favor ingrese la opcion desdeada\n A - Cargar un nuevo usuario\n B - Recuperar datos\n C - Salir").toLowerCase();
while ( ingreso == "a" || ingreso == "b" || ingreso == "c") {
    switch (ingreso) {
        case "a":
            cargarUsuarios(arrayUsuarios);
            ingreso = prompt("Por favor ingrese la opcion desdeada\n A - Cargar un nuevo usuario\n B - Recuperar datos\n C - Salir").toLowerCase();
            break;
        case "b":
            let persona = prompt("Por favor ingrese en nombre de usuario que desea encontrar").toLowerCase();
            let indice = arrayUsuarios.find(buscador => buscador.nombre == persona);
            // MUESTRO EL OBJETO DEL USUARIO QUE QUIERE RECUPERAR LA CLAVE
            console.log(indice);
            alert(`Enviaremos un mail a su casilla ${indice.mail} para que pueda recuperar sus datos, Muchas gracias!`);
            ingreso = "";
            break;

        case "c":
            alert("Muchas gracias por visitar nuestra pagina");
            ingreso = "";
            break;
    }    
} 
// MUESTRO EL ARRAY TOTAL DE USUARIOS
console.log(arrayUsuarios);
