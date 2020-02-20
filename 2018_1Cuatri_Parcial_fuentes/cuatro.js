function mostrar()
{
var num1;
var num2;

num1=prompt("Ingrese el primer numero ");
num2=prompt("ingrese el segundo numero ");

if(num1 == num2){
    alert(num1+num2);
}
num1=parseInt(num1);
num2=parseInt(num2);
if (num1>num2){
    
    resultado=num1 - num2;
    alert(resultado);
}
if (num1<num2){

    resultado= num1 + num2;

    alert(resultado);
}if (resultado>10){
    alert("la suma es " + resultado + " y supero el 10");
}

}
