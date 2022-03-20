

let producto = prompt("Por favor ingrese el numero de articulo que desea comprar");
let cantidad = prompt("Por favor ingrese la cantidad que desea comprar");
let iva = 1.21;
let valor1 = 1500;
let valor2 = 2000;
let valor3 = 3000;
let valor4 = 4000;
let ventaTotal = 1;

// CONFIRMO QUE NO SELECCIONEN CANCELAR EN EL PROMPT
if (producto !== null && cantidad !== null) {
    // CONFIRMO QUE INGRESEN VALORES VALIDOS DE PRODUCTO Y CANTIDAD
    if (!isNaN(producto)){
        if (!isNaN(cantidad)) {
            switch (producto) {
                case '1':
                    ventaTotal = valor1 * iva * cantidad;
                    break;
                case '2':
                    ventaTotal = valor2 * iva *cantidad;
                    break;
                case '3':
                    ventaTotal = valor3 * iva * cantidad;
                    break;
                case '4':
                    ventaTotal = valor4 * iva * cantidad;
                    break;
            }
            alert("Muchas gracias por tu compra del " + producto + ", el total de la misma incluida impuestos es de " + ventaTotal);
        } else {
            alert("Por favor ingrese una Cantidad valida");
        }
    }
    else {
        alert("Por favor ingrese un Articulo valido");
    }
}

