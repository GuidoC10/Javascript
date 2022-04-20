let arrayVentas = [];
let valorGlobo = 3000;
let valorMacarons = 1500;
let valorPreservadas = 5000;
let valorMantitas = 4000;
let stockGlobos = 5;
let stockMacarons = 5;
let stockPreservadas = 5;
let stockMantitas = 5;

class Ventas {
    constructor (producto, valor, cantidad, total) {
        this.producto = producto;
        this.valor = valor;
        this.cantidad = cantidad;
        this.total = total;
    }
}


let globo = document.getElementById("globo");
globo.addEventListener("click", mensajeglobo);
function mensajeglobo () {
    let cantidadGlobo = document.getElementById("cantidadGlobo").value
    let producto1 = "Globo";
    let valor1 = valorGlobo;
    let cantidadGlobo1 = cantidadGlobo;
    let total1 = valor1 * cantidadGlobo1;
    stockGlobos = stockGlobos - cantidadGlobo1
    stockGlobos < 0 ? mensajeSinStock("Globos") : arrayVentas.push( new Ventas(producto1, valor1, cantidadGlobo, total1));
    mensajeCarrito(cantidadGlobo, "Globos");

}


let macarons = document.getElementById("macarons");
macarons.addEventListener("click", mensajeMacarons);
function mensajeMacarons () {
    let cantidadMacarons = document.getElementById("cantidadMacarons").value
    let producto1 = "Macarons";
    let valor1 = valorMacarons;
    let cantidadMacarons1 = cantidadMacarons;
    let total1 = valor1 * cantidadMacarons1;
    stockMacarons = stockMacarons - cantidadMacarons1;
    stockMacarons < 0 ? mensajeSinStock("Macarons") : arrayVentas.push( new Ventas(producto1, valor1, cantidadMacarons, total1));
    mensajeCarrito(cantidadMacarons, "Macarons");
   
}


let preservadas = document.getElementById("preservadas");
preservadas.addEventListener("click", mensajePreservadas);
function mensajePreservadas () {
    let cantidadPreservadas = document.getElementById("cantidadPreservadas").value
    let producto1 = "Preservadas";
    let valor1 = valorPreservadas;
    let cantidadPreservadas1 = cantidadPreservadas;
    let total1 = valor1 * cantidadPreservadas1;
    stockPreservadas = stockPreservadas - cantidadPreservadas1
    stockPreservadas < 0 ? mensajeSinStock("Rosas Preservadas") : arrayVentas.push( new Ventas(producto1, valor1, cantidadPreservadas, total1));
    mensajeCarrito(cantidadPreservadas, "Rosas Preservadas"); 
   
}


let mantitas = document.getElementById("mantitas");
mantitas.addEventListener("click", mensajeMantitas);
function mensajeMantitas () {
    let cantidadMantitas = document.getElementById("cantidadMantitas").value
    let producto1 = "Mantitas";
    let valor1 = valorMantitas;
    let cantidadMantitas1 = cantidadMantitas;
    let total1 = valor1 * cantidadMantitas1;
    stockMantitas = stockMantitas - cantidadMantitas1;
    stockPreservadas < 0 ? mensajeSinStock("Mantitas") : arrayVentas.push( new Ventas(producto1, valor1, cantidadMantitas, total1));
    mensajeCarrito(cantidadMantitas, "Mantitas");
    
}

//MENSAJE DE FINALIZACION DE COMPRA
function mensajeCarrito (x,y) {
    let limpiarCarrito = document.querySelector("#carrito");
    limpiarCarrito.innerHTML = "";
    let finalCarrito = document.createElement("div");
        finalCarrito.className = "claseFormulario";
        finalCarrito.innerHTML = `Muchas gracias por tu compra de ${x} ${y}, esperemos que lo disfrutes`;
        limpiarCarrito.appendChild(finalCarrito);
}

// MENSAJE EN CASO DE QUE NO HAYA STOCK
function mensajeSinStock (x) {
    let limpiarCarrito = document.querySelector("#carrito");
    limpiarCarrito.innerHTML = "";
    let finalCarrito = document.createElement("div");
        finalCarrito.className = "claseFormulario";
        finalCarrito.innerHTML = `Te pedimos disculpas, por el momento no contamos con la cantidad de ${x} que nos pedis`;
        limpiarCarrito.appendChild(finalCarrito);
    }


    //GENERO UN ARRAY CON EL TOTAL DE CADA VENTA 
console.log(arrayVentas);


