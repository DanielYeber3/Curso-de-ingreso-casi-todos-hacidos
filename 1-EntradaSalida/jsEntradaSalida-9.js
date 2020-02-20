/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var sueld
var resul


/* sueld= document.getElementById("sueldo").value;

sueld= parseInt(sueld)

resul= document.getElementById("resultado").value;

resul= parseInt(resul)

resul = sueld + sueld * 10 / 100; */

sueld= document.getElementById("sueldo").value

resul= parseInt(sueld) + (parseInt (sueld) *10 / 100)
document.getElementById("resultado").value = resul 








	
}
