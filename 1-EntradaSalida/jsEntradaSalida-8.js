/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
var divis
var divid
var resul

divis= document.getElementById("numeroDivisor").value;
divid= document.getElementById("numeroDividendo").value;

resul= parseInt(divid) % parseInt(divis)

alert("El resto es "+ resul)

	
}
