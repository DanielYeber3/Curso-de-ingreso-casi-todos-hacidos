/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
var n1
var n2
var resul

n1= document.getElementById("numeroUno").value;

n2= document.getElementById("numeroDos").value;

resul= parseInt(n1) + parseInt(n2);

alert("la suma es "+resul);

}

function restar()
{
var num1
var num2
var result

num1= document.getElementById("numeroUno").value;
num2= document.getElementById("numeroDos").value;

result= parseInt(num1) - parseInt(num2)

alert("la resta es " + result);

	
}

function multiplicar()
{ 
var numb1
var numb2
var result

numb1= document.getElementById("numeroUno").value;
numb2= document.getElementById("numeroDos").value;

result= parseInt(numb1) * parseInt(numb2);

alert("la multiplicacion da "+ result);


}

function dividir()
{
var numbr1
var numbr2
var resulto

numbr1= document.getElementById("numeroUno").value;
numbr2= document.getElementById("numeroDos").value;

resulto= parseInt(numbr1) / parseInt(numbr2);

alert("La division da "+resulto);

	
}

