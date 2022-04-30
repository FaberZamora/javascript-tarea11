var num = prompt("Ingresa un numero: ");
var porcentaje = num*15/100;
var total = parseFloat(num-porcentaje);
console.log("numero ingresado: "+num);
console.log("descontando el 15% queda: "+total);