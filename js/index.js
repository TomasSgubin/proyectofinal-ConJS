// const unaCuota = (num1,num2)=>{
//     return parseInt(num1) / 1;
// }
// const tresCuotas = (num1,num2)=>{
//     return parseInt(num1) / 3;
// }
// const seisCuotas = (num1,num2)=>{
//     return parseInt(num1) / 6;
// }
// const nueveCuotas = (num1,num2)=>{
//     return parseInt(num1) / 9;
// }
// const doceCuotas = (num1,num2)=>{
//     return parseInt(num1) / 12;
// }

// alert("¿en cuantas cuotas queres pagar?");
// let operacion = prompt("1: una cuota, 3: tres cuotas, 6: seis cuotas, 9: nueve cuotas, 12: doce cuotas");

// if (operacion == 1){
//     let numero1 = prompt("precio del producto");
//     let numero2 = 1;
//     resultado = unaCuota(numero1, 1);
//     alert(`la cuota a pagar es de $${resultado} por mes`);
// }
// else if (operacion == 3){
//     let numero1 = prompt("precio del producto");
//     let numero2= 3;
//     resultado = tresCuotas(numero1, 3);
//     alert(`las cuotas a pagar son de $${resultado} por mes`)
// }
// else if (operacion == 6){
//     let numero1 = prompt("precio del producto");
//     let numero2= 6;
//     resultado = seisCuotas(numero1, 6);
//     alert(`las cuotas a pagar son de ${resultado} por mes`)
// }
// else if (operacion == 9){
//     let numero1 = prompt("precio del producto");
//     let numero2= 9;
//     resultado = nueveCuotas(numero1, 9);
//     alert(`las cuotas a pagar son de $${resultado} por mes`)
// }
// else if (operacion == 12){
//     let numero1 = prompt("precio del producto");
//     let numero2= 12;
//     resultado = tresCuotas(numero1, 12);
//     alert(`las cuotas a pagar son de $${resultado} por mes`)
// }
// else{
//     alert("no disponemos de esa cantidad de cuotas, lo sentimos")
// }

let productoIngresado = -1;
let montoDinero = 0;
let opcionProducto ;
let nombreProductoIngresado = "";

const productos = [
    {
        nombre: "mixer",
        precioProducto : 2000,
    },
    {
        nombre: "auriculares",
        precioProducto : 2600
    },
    {
        nombre: "tocadisco",
        precioProducto : 5000,
    },
    {
        nombre: "monitores",
        precioProducto : 7850,
    },
    {
        nombre: "vinilos",
        precioProducto : 1000,
    },
    {
        nombre: "cables rca",
        precioProducto : 300,
    },
    {
        nombre: "placa de audio",
        precioProducto : 4300,
    }
]

const ingresarMonto = (posicionCuentaUsuario, montoIngresar) => {
    productos[posicionCuentaUsuario].precioProducto = montoIngresar
    alert (`El pago de su producto fue de ${productos[posicionCuentaUsuario].precioProducto}`)
}

const ingresarCantidad = (posicionCuentaUsuario, montoIngresar) => {
    if (montoIngresar < productos[posicionCuentaUsuario].precioProducto ){
        productos[posicionCuentaUsuario].precioProducto *= montoIngresar

        alert (`El pago de su producto fue de ${productos[posicionCuentaUsuario].precioProducto}`)

        alert("Listo! La compra ha sido realizada.")

    } else {
        alert("Monto insuficiente.")
    }   
}

do {
    if (productoIngresado === -1){
        nombreProductoIngresado = prompt("Ingrese el nombre del producto que desea comprar.")
        productoIngresado = productos.indexOf(productos.find((producto)=>{
            return producto.nombre === nombreProductoIngresado.toLowerCase()
        }))
        console.log(productoIngresado) 
    } else {

    opcionProducto = parseInt(prompt("Ingrese una opción. \n 0: Para cancelar la compra o salir de la tienda web. \n 1: Para adquirir el producto. \n 2: Para adquirir dos o mas productos."))

    console.log("opcionProducto " + opcionProducto)

    switch (opcionProducto) {

        case 0:
            alert("Listo! La compra ha sido cancelada.")
            alert("Gracias por visitar nuestra tienda web!")

            break;

       case 1:
            montoDinero = parseInt(prompt("Ingrese el monto del producto"))
            ingresarMonto(productoIngresado, montoDinero)
            montoDinero = 0
            alert("Listo! La compra ha sido realizada.")

            break;

       case 2:
            montoDinero = parseInt(prompt("Ingrese las cantidades deseadas del producto"))
           ingresarCantidad(productoIngresado, montoDinero)
            montoDinero = 0
            

            break;
        
        default:
            alert ("Su opción no es válida.")

            break;

    }

}
} while (opcionProducto != 0)
