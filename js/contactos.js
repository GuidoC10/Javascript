// GENERP EL ARRAY EN EL CUAL GUARDAR LOS USUARIOS EN EL LOCAL STORAGE
const arrayUsuarios = JSON.parse(localStorage.getItem("USUARIOS")) || [];

//VERIFICO QUE ME CARGE LOS DATOS GUARDADOS EN EL LOCAL STORAGE
console.log("USUARIOS CARGADOS DEL JSON", arrayUsuarios);


///////////////////////////NODOS
const nodoLegend = document.querySelector("legend");
const login = document.getElementById("borrar");
const confirmacion = document.getElementById("registro");
const nodoNombre = document.querySelector(".loginN");
const nodoApellido = document.querySelector(".loginA");
const nodoPassword = document.querySelector(".loginP");
const nodoMail = document.querySelector(".loginM");
const nodoBotonIngreso = document.querySelector(".btnIngreso");
const nodoBotonRegistro = document.querySelector(".btnRegistro");
const nodoBotonOlvido = document.querySelector(".btnOlvido");
const nodoBotonInicioSesion = document.querySelector(".btnInicioSesion");
const nodoCerrarSesion = document.querySelector(".btnCerrarSesion");
const nodoRecuperar = document.querySelector(".btnRecuperar");
const nodoVolver = document.querySelector("btnVolver");
let sessionIniciada = false;
let userInit = "";

class Usuario {
    constructor (nombre, apellido, password, mail) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.password = password;
        this.mail = mail;
    }
}

/////////////////////////////////////////CARGA DE USUARIOS NUEVOS/////////////////////////////////////////////////
//let confirmacion = document.getElementById("registro");
confirmacion.addEventListener("click",cargarUsuarios);

function cargarUsuarios (e) {
    //PREVENGO EL FORMULARIO Y OBTENGO LOS DATOS
    e.preventDefault();
    let nombre = document.getElementById("infoName").value;
    let apellido = document.getElementById("infoApellido").value;
    let password = document.getElementById("infoPassword").value;
    let mail = document.getElementById("infoMail").value;
    //PRUEBO QUE NO EXISTA EN EL ARRAY EL USUARIO Y EN CASO DE EXISTIR PASO ERROR
    let pruebaUsuario = arrayUsuarios.findIndex(buscador => buscador.nombre == nombre);
    let pruebaMail = arrayUsuarios.findIndex(buscador => buscador.mail == mail);
    if (pruebaUsuario !== -1 || pruebaMail !== -1 && arrayUsuarios.lenght >=1) {
        return msjError();
    }
    //CARGO AL NUEVO USUARIO AL ARRAY Y PASO MSJ DE BIENVENIDA
    const nuevoUsuario = new Usuario(nombre, apellido, password, mail);
    arrayUsuarios.push(nuevoUsuario);
    msjCargaUsuario(nuevoUsuario);
    usuarioJson ();
}

function msjError () {
    document.getElementById("infoName").value = "";
    document.getElementById("infoApellido").value = "";
    document.getElementById("infoPassword").value = "";
    document.getElementById("infoMail").value = "";
    swal({
        title: "El usuario ya esta registrado",
        icon: "error",
      });

}

function msjCargaUsuario (usuarioIn){
    //let login = document.getElementById("borrar");
    login.innerHTML = "";
    let bienvenido = document.createElement("div");
    bienvenido.className = "claseFormulario";
    bienvenido.innerHTML = `Gracias por registrarte ${usuarioIn.nombre} ${usuarioIn.apellido}`;
    login.appendChild(bienvenido); 
}

//CARGAR USUARIO AL LOCALSTORAGE
function usuarioJson () {
    let usuariosJson = JSON.stringify(arrayUsuarios);
    //console.log("usuarios JSON", usuariosJson);
    localStorage.setItem("USUARIOS", usuariosJson);
}


/////////////////////////////////////////INICIO DE SESION///////////////////////////////////////////////
let confirmacion1 = document.getElementById("ingreso");
confirmacion1.addEventListener("click",ingreso);

function ingreso (eS) {
    eS.preventDefault();
    nodoApellido.classList.add("oculto");
    nodoMail.classList.add("oculto");
    nodoBotonRegistro.classList.add("oculto");
    nodoBotonIngreso.classList.add("oculto");
    nodoBotonOlvido.classList.remove("oculto");
    nodoBotonInicioSesion.classList.remove("oculto");
    
}

nodoBotonInicioSesion.addEventListener("click", iniciarSesion);

function iniciarSesion (e) {
    e.preventDefault();
    let nombre = document.getElementById("infoName").value;
    let password = document.getElementById("infoPassword").value;
    let pruebaUsuario = arrayUsuarios.find(buscador => buscador.nombre == nombre);
    //console.log(pruebaUsuario);
    if (!pruebaUsuario){
        document.getElementById("infoName").value = "";
        document.getElementById("infoPassword").value = "";
        return swal({
            title: "Los datos no son correctos",
            icon: "error",
          })
    } else if (pruebaUsuario.password === password) {
        nodoLegend.innerHTML = `Hola ${pruebaUsuario.nombre}!!!`;
        sessionUsuario (pruebaUsuario);
        nodoNombre.classList.add("oculto");
        nodoPassword.classList.add("oculto");
        nodoMail.classList.add("oculto");
        nodoBotonRegistro.classList.add("oculto");
        nodoBotonIngreso.classList.add("oculto");
        nodoBotonOlvido.classList.add("oculto");
        nodoBotonInicioSesion.classList.add("oculto");
        nodoCerrarSesion.classList.remove("oculto");

        } else {
        swal({
            title: "Los datos no son correctos",
            icon: "error",
          });
    }
}

//////////////////////////////////////////////RECUPERO DE CONTRSASEÑA/////////////////////////////////////////////
nodoBotonOlvido.addEventListener("click", olvidarPassword);

function olvidarPassword () {
    nodoPassword.classList.add("oculto");
    nodoApellido.classList.remove("oculto");
    nodoMail.classList.remove("oculto");
    nodoBotonRegistro.classList.add("oculto");
    nodoBotonIngreso.classList.add("oculto");
    nodoBotonOlvido.classList.add("oculto");
    nodoBotonInicioSesion.classList.add("oculto");
    nodoRecuperar.classList.remove("oculto");
    nodoVolver.classList.remove("remove");

    nodoRecuperar.addEventListener("click", recuperarPass);
    function recuperarPass (){
        let nombre = document.getElementById("infoName").value;
        let apellido = document.getElementById("infoApellido").value;
        let mail = document.getElementById("infoMail").value;
        let pruebaUsuario = arrayUsuarios.find(buscador => buscador.nombre == nombre);
        if (!pruebaUsuario){
            document.getElementById("infoName").value = "";
            document.getElementById("infoApellido").value = "";
            document.getElementById("infoMail").value = "";
            return swal({
                title: "Los datos no son correctos",
                icon: "error",
              })
        } else if (pruebaUsuario.apellido === apellido && pruebaUsuario.mail === mail) {
            document.getElementById("infoName").value = "";
            document.getElementById("infoApellido").value = "";
            document.getElementById("infoMail").value = "";
            swal({
                title: `Te enviaremos un mail a tu casilla ${pruebaUsuario.mail} para que puedas recuperar tu contraseña`,
                icon: "success",
            });
        }
        else {
            document.getElementById("infoName").value = "";
            document.getElementById("infoApellido").value = "";
            document.getElementById("infoMail").value = "";
            swal({
                title: "Por favor verifica los datos ingresados",
                icon: "error",
            });
        }
    }
}

///////////////////////////////////////GENERO EL SESSION STORAGE Y LO GUARDO//////////////////////////////////////
function sessionUsuario (user) {
    usuarioDeSessionStorage = user;
    sessionIniciada = true;
    sessionStorage.setItem("ingresoUsuario", JSON.stringify(usuarioDeSessionStorage));
}

if (sessionIniciada = true) {
    userInit = JSON.parse(sessionStorage.getItem("ingresoUsuario"))
    //console.log(userInit);
    nodoLegend.innerHTML = `Hola ${userInit.nombre}!!!`;
    nodoNombre.classList.add("oculto");
    nodoApellido.classList.add("oculto");
    nodoPassword.classList.add("oculto");
    nodoMail.classList.add("oculto");
    nodoBotonRegistro.classList.add("oculto");
    nodoBotonIngreso.classList.add("oculto");
    nodoBotonOlvido.classList.add("oculto");
    nodoBotonInicioSesion.classList.add("oculto");
    nodoCerrarSesion.classList.remove("oculto");
}

nodoCerrarSesion.addEventListener("click", finalizarSesion);

function finalizarSesion (){
    sessionIniciada = false;
    usuarioDeSessionStorage = "";
    sessionStorage.setItem("ingresoUsuario", JSON.stringify(usuarioDeSessionStorage));
    location.href = "../index.html";
    sessionStorage.removeItem("ingresoUsuario");

}
