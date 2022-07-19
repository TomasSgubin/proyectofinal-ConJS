const unaCuota = (num1,num2)=>{
    return parseInt(num1) / 1;
}
const tresCuotas = (num1,num2)=>{
    return parseInt(num1) / 3;
}
const seisCuotas = (num1,num2)=>{
    return parseInt(num1) / 6;
}
const nueveCuotas = (num1,num2)=>{
    return parseInt(num1) / 9;
}
const doceCuotas = (num1,num2)=>{
    return parseInt(num1) / 12;
}

alert("¿en cuantas cuotas queres pagar?");
let operacion = prompt("1: una cuota, 3: tres cuotas, 6: seis cuotas, 9: nueve cuotas, 12: doce cuotas");

if (operacion == 1){
    let numero1 = prompt("precio del producto");
    let numero2 = 1;
    resultado = unaCuota(numero1, 1);
    alert(`la cuota a pagar es de $${resultado} por mes`);
}
else if (operacion == 3){
    let numero1 = prompt("precio del producto");
    let numero2= 3;
    resultado = tresCuotas(numero1, 3);
    alert(`las cuotas a pagar son de $${resultado} por mes`)
}
else if (operacion == 6){
    let numero1 = prompt("precio del producto");
    let numero2= 6;
    resultado = seisCuotas(numero1, 6);
    alert(`las cuotas a pagar son de ${resultado} por mes`)
}
else if (operacion == 9){
    let numero1 = prompt("precio del producto");
    let numero2= 9;
    resultado = nueveCuotas(numero1, 9);
    alert(`las cuotas a pagar son de $${resultado} por mes`)
}
else if (operacion == 12){
    let numero1 = prompt("precio del producto");
    let numero2= 12;
    resultado = tresCuotas(numero1, 12);
    alert(`las cuotas a pagar son de $${resultado} por mes`)
}
else{
    alert("no disponemos de esa cantidad de cuotas, lo sentimos")
}