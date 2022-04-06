
let compras = "si";
let valor1 = 1500;
let valor2 = 2000;
let valor3 = 3000;
let valor4 = 4000;
let ventaTotal = 0;
let envioTotal = 0;
let envio1 = "Bonificado";
let envio2 = 500;
let envio3 = 1000;
let envio4 = 2000;
let iva = 1.21;

while (compras == "si") {
    let venta = 0;
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
    compras = prompt("Desea seguir comprando?").toLowerCase();
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
    return x*iva;
}

let totalIva = sumarIva(ventaTotal);

//DOY LA DEVOLUCION DEL TOTAL DE LA COMPRA Y DEL COSTO DEL ENVIO
if (envio == 1) {
    let infoVenta = document.createElement("ul");
    infoVenta.innerHTML = `<ul>Total compra Iva incluido ${totalIva}</ul>
                           <ul>Envio: ${envioTotal}</ul>`;

    let finVenta = document.getElementById("ejemploDom");
    finVenta.innerHTML = `<h2>Muchas gracias por tu compra</h2>`;
    finVenta.append(infoVenta);
} else {
    let infoVenta1 = document.createElement("ul");
    infoVenta1.innerHTML = `<ul>Total compra IVA incluido: ${totalIva}</ul>
                            <ul>Envio: ${envioTotal}</ul>`;

    let finVenta1 = document.getElementById("ejemploDom");
    finVenta1.innerHTML = `<h2 style= "color:#B97375">Muchas gracias por tu compra</h2>`;
    finVenta1.append(infoVenta1);
}
