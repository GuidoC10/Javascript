

/*let producto = prompt("Por favor ingrese el numero de articulo que desea comprar");
let cantidad = prompt("Por favor ingrese la cantidad que desea comprar");*/
let compras = "si";
let iva = 1.21;
//let totalIva = ;
let valor1 = 1500;
let valor2 = 2000;
let valor3 = 3000;
let valor4 = 4000;
let ventaTotal = 1;
let envioTotal = 0;
let envio1 = "Bonificado";
let envio2 = 500;
let envio3 = 1000;
let envio4 = 2000;

while (compras == "si") {
    let producto = prompt("Por favor ingrese el numero de articulo que desea comprar");
    let cantidad = prompt("Por favor ingrese la cantidad que desea comprar");

    // CONFIRMO QUE NO SELECCIONEN CANCELAR EN EL PROMPT
    if (producto !== null && cantidad !== null) {
        // CONFIRMO QUE INGRESEN VALORES VALIDOS DE PRODUCTO Y CANTIDAD
        if (!isNaN(producto) && producto > 0 && producto <= 4){
            if (!isNaN(cantidad)) {
                switch (producto) {
                    case '1':
                        venta = valor1 * cantidad;
                        break;
                    case '2':
                        venta = valor2 *cantidad;
                        break;
                    case '3':
                        venta = valor3 * cantidad;
                        break;
                    case '4':
                        venta = valor4 * cantidad;
                        break;
                }
            } else {
                alert("Por favor ingrese una Cantidad valida");
            }
        }
        else {
            alert("Por favor ingrese un Articulo valido");
        }

    }
    compras = prompt("Desea seguir comprando?");
    ventaTotal = venta + ventaTotal;
}

// SACO EL COSTO DEL VALOR DEL ENVIO
let envio = prompt(`Por favor ingrese la zona donde realizar en el envio
         Zona Sur = 1
         Caba = 2
         Zona Oeste = 3
         Zona Norte = 4`);

switch (envio) {
    case "1":
        envioTotal = envio1;
        break;
    case "2":
        envioTotal = envio2;
        break;
    case "3":
        envioTotal = envio3;
        break;
    case "4":
        envioTotal = envio4;
        break;

}
//HAGO UNA FUNCION PARA AGREGAR EL IVA AL TOTAL DE LA COMPRA
function sumarIva(x) {
    return x*1.21;
}

let totalIva = sumarIva(ventaTotal);

//DOY LA DEVOLUCION DEL TOTAL DE LA COMPRA Y DEL COSTO DEL ENVIO
if (envio == 1) {
    alert(`Muchas gracias por tu compra, el total de la misma IVA incluido es de $${totalIva} y el costo del envio es ${envioTotal}`);

} else {
alert(`Muchas gracias por tu compra, el total de la misma IVA incluido es de $${totalIva} y el costo del envio es $${envioTotal}`);
}
