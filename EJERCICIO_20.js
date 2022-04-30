var num1 = prompt("Ingresa un numero 1: ");
var num2 = prompt("Ingresa un numero 2: ");
var num3 = prompt("Ingresa un numero 3: ");
if((num1<num2)&&(num1<num3)){
   console.log("numero 1= "+num1);
   console.log("numero 2= "+num2);
   console.log("numero 3= "+num3);
   console.log(num1 + " es menor");
    
}else if((num2<num1)&&(num2<num3)){
   console.log("numero 1= "+num1);
   console.log("numero 2= "+num2);
   console.log("numero 3= "+num3);
   console.log(num2 + " es menor");

}else{
    console.log("numero 1= "+num1);
   console.log("numero 2= "+num2);
   console.log("numero 3= "+num3);
   console.log(num3 + " es menor");
}