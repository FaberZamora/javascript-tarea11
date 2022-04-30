var edad= parseInt(prompt("Ingresa tu edad: "));
var articulos= parseInt(prompt("Ingresa numero de articulos comprados: "));
if((edad>18)&&(articulos>1)){
    console.log("su edad: "+edad);
    console.log("articulos comprados: "+articulos);
    console.log("True");
}else{
    console.log("su edad: "+edad);
    console.log("articulos comprados: "+articulos);
    console.log("False");
}