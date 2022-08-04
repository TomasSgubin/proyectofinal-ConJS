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


const form = document.querySelector("#formulario");

const enviarFormulario = (event) => {
    event.preventDefault();
    console.log(event.target.nombre.value, event.target.correo.value, event.target.telefono.value);
};

form.addEventListener("submit", enviarFormulario);