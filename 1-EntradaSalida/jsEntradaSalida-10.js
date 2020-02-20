/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
var n1

var resul 

n1= document.getElementById("importe").value;

n1= parseInt(n1);

resul= n1 + (n1 *25 / 100);

document.getElementById("resultado").value = resul;

}
