
let arrayVentas = [];
let valorGlobo = 3000;
let valorMacarons = 1500;
let valorPreservadas = 5000;
let valorMantitas = 4000;
let totalCarrito = 0;
let nodoEliminarUnidad = 0;

const cart = document.getElementById("cart");
cart.addEventListener("click", recargar);

function recargar () {
    location.href = "../pages/cart.html";

}


class Ventas {
    constructor (producto, valor, cantidad, total, img) {
        this.producto = producto;
        this.valor = valor;
        this.cantidad = cantidad;
        this.total = total;
        this.img = img;
    }

}


const globo = document.getElementById("globo");
globo.addEventListener("click", mensajeglobo);
function mensajeglobo () {
    let producto1 = "Globo";
    let cantidadGlobo1 = 1;
    const imagenGlobo = `https://detalles04.000webhostapp.com/img/globo.jpeg`;
    cargarCarrito(producto1, valorGlobo, cantidadGlobo1, valorGlobo, imagenGlobo);
    swal("Muchas Gracias", `Acabas de comprar ${cantidadGlobo1} Globo`, "success");
    
}


const macarons = document.getElementById("macarons");
macarons.addEventListener("click", mensajeMacarons);
function mensajeMacarons () {
    let producto1 = "Macarons";
    let valor1 = valorMacarons;
    let cantidadMacarons1 = 1;
    const imagenMacarons = `https://detalles04.000webhostapp.com/img/macarons.jpeg`;
    cargarCarrito(producto1, valor1, cantidadMacarons1, valorMacarons, imagenMacarons);
    swal("Muchas Gracias", `Acabas de comprar ${cantidadMacarons1} Macaron`, "success");
   
}


const preservadas = document.getElementById("preservadas");
preservadas.addEventListener("click", mensajePreservadas);
function mensajePreservadas () {
    let producto1 = "Preservadas";
    let valor1 = valorPreservadas;
    let cantidadPreservadas1 = 1;
    const imagenPreservadas = `https://detalles04.000webhostapp.com/img/preservadas.jpeg`;
    cargarCarrito(producto1, valor1, cantidadPreservadas1, valorPreservadas, imagenPreservadas);
    swal("Muchas Gracias", `Acabas de comprar ${cantidadPreservadas1} Rosa Preservada`, "success");
   
}


const mantitas = document.getElementById("mantitas");
mantitas.addEventListener("click", mensajeMantitas);
function mensajeMantitas () {
    let producto1 = "Mantitas";
    let valor1 = valorMantitas;
    let cantidadMantitas1 = 1;
    const imagenMantitas = `https://detalles04.000webhostapp.com/img/mantita1.jpeg`;
    cargarCarrito (producto1, valor1, cantidadMantitas1, valorMantitas, imagenMantitas);
    swal("Muchas Gracias", `Acabas de comprar ${cantidadMantitas1} Mantita`, "success");
}


////GENERO EL CARRITO
function cargarCarrito(producto, valor, cantidad, total, img) {
    let enCarrito = arrayVentas.findIndex(element => element.producto === producto);
    
    enCarrito === -1 ? arrayVentas.push( new Ventas(producto, valor, cantidad, total, img)) : 
        (arrayVentas[enCarrito].cantidad+=1,
         arrayVentas[enCarrito].total = arrayVentas[enCarrito].valor * arrayVentas[enCarrito].cantidad);

}


////FINALIZAR COMPRA
const nodoFinCompra = document.querySelector(".btnFinalizaCompra");
nodoFinCompra.addEventListener("click", finCompra);

function finCompra () {
    arrayVentas.forEach((element) => {
        totalCarrito += element.total;
        console.log(`total ${element.producto} = ${element.total}, Nos contactaremos con vos para poder ultimar detalles`);
    });
    const nodoMostrarCarrito = document.querySelector(".carrito");
    nodoMostrarCarrito.innerHTML = "";
    const nodoFinCarrito = document.createElement("div");
    nodoFinCarrito.setAttribute("class", "fuentes");
    nodoFinCarrito.innerHTML = `Muchas gracias por tu compra, el total de la misma es de $${totalCarrito}, Nos pondremos en contacto para que puedas personalizar tus detalles`;
    nodoMostrarCarrito.appendChild(nodoFinCarrito);
    console.log(totalCarrito);
    arrayVentas = [];
    totalCarrito = 0;
    nodoFinCompra.classList.add("oculto");
    nodoVerCarrito.classList.add("oculto");

}


////MUESTRO EL CARRITO
const nodoAgregarArticulo = document.querySelector(".btnAgregarArticulo");
const nodoVerCarrito = document.querySelector(".btnVerCarrito");
nodoVerCarrito.addEventListener("click", mostrarCarrito);

function mostrarCarrito () {
    if (arrayVentas.length === 0) {
        return swal({
            title: "Por favor seleccione un articulo",
            icon: "error",
          });
    }
    const nodoMostrarCarrito = document.querySelector(".carrito");
    nodoMostrarCarrito.innerHTML = "";
    const nodoNuevoCarrito = document.createElement("div");
    nodoNuevoCarrito.setAttribute("display", "flex-row");
    let contador = "";
    arrayVentas.forEach((element, index)=>{
        contador+=domVerCarrito(element, index);
        nodoNuevoCarrito.innerHTML=contador;
    });
    nodoMostrarCarrito.appendChild(nodoNuevoCarrito);
    nodoVerCarrito.classList.add("oculto");
       
}


function domVerCarrito(element, index) {
    return `<div class="verCarrito"> 
                <div class="hijoCarrito">
                    <img src="${element.img}" class="imagenCarrito">
                </div>
                <div class="hijoCarrito fuentesVerCarrito">
                    ${element.producto}
                </div>
                <div class="hijoCarrito cantidadVerCarrito fuentesVerCarrito">    
                    Cantidad de unidades:${element.cantidad}
                </div>
                <div class="hijoCarrito">
                    <button onclick="functionC(${index})" title="Agregar Unidad" class="btn">Agregar 1 Unidad</button>
                    <button onclick="functionB(${index})"title="Eliminar unidad" value class="btn">Eliminar 1 Unidad</button>
                    <button onclick="functionA(${index})" title="Eliminar producto" class="btn">Eliminar Producto</button>
                </div>
            </div>`;

}


function functionC (index) {
    arrayVentas[index].cantidad+=1,
    arrayVentas[index].total = arrayVentas[index].valor * arrayVentas[index].cantidad;
    mostrarCarrito ();

}


function functionB (index) {
    if (arrayVentas[index].cantidad >1) {
    arrayVentas[index].cantidad-=1,
    arrayVentas[index].total = arrayVentas[index].valor * arrayVentas[index].cantidad;
    mostrarCarrito ();
    } else if (arrayVentas[index].cantidad = 1) {
        functionA (index);
    }

}


function functionA (index){
    if (arrayVentas[index].cantidad >1) {
    console.log(index);
    arrayVentas.splice(index, 1);
    console.log(arrayVentas);
    mostrarCarrito();
    } else if (arrayVentas[index].cantidad = 1) {
        location.href = "../pages/cart.html";
    }

}
