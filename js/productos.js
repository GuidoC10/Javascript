
let arrayVentas = [];
let valorGlobo = 3000;
let valorMacarons = 1500;
let valorPreservadas = 5000;
let valorMantitas = 4000;
let totalCarrito = 0;

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


function cargarCarrito(producto, valor, cantidad, total, img) {
    let enCarrito = arrayVentas.findIndex(element => element.producto === producto);
    
    enCarrito === -1 ? arrayVentas.push( new Ventas(producto, valor, cantidad, total, img)) : 
        (arrayVentas[enCarrito].cantidad+=1,
        arrayVentas[enCarrito].total = arrayVentas[enCarrito].valor * arrayVentas[enCarrito].cantidad);

    }
console.log("FUERA DE LA FUNCTION", arrayVentas); 


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

const nodoVerCarrito = document.querySelector(".btnVerCarrito");
nodoVerCarrito.addEventListener("click", mostrarCarrito);

function mostrarCarrito () {
    const nodoMostrarCarrito = document.querySelector(".carrito");
    nodoMostrarCarrito.innerHTML = "";
    const nodoNuevoCarrito = document.createElement("div");
    nodoNuevoCarrito.setAttribute("display", "flex-row");
    let contador = "";
    arrayVentas.forEach((element)=>{
        contador+=domVerCarrito(element);
        nodoNuevoCarrito.innerHTML=contador;
    });
    nodoMostrarCarrito.appendChild(nodoNuevoCarrito);
    nodoVerCarrito.classList.add("oculto");

    const nodoEliminarUnidad = document.querySelector(".carritoProducto");
    console.log(nodoEliminarUnidad);
    let enCarrito2 = arrayVentas.findIndex(element => element.producto === nodoEliminarUnidad);
    console.log(enCarrito2);
}


function domVerCarrito(element) {
    return `<div class="verCarrito"> 
                <div class="hijoCarrito">
                    <img src="${element.img}" class="imagenCarrito">
                </div>
                <div class="hijoCarrito fuentesVerCarrito carritoProducto">
                    ${element.producto}
                </div>
                <div class="hijoCarrito cantidadVerCarrito fuentesVerCarrito">    
                    Cantidad de unidades:${element.cantidad}
                </div>
                <div class="hijoCarrito">
                    <button title="Eliminar unidad" class="btn btnEliminarUnidad">Eliminar 1 unidad</button>
                    <button title="Eliminar producto" class="btn btnEliminarProducto">Eliminar Producto</button>
                </div>
            </div>`;
            
           
}
