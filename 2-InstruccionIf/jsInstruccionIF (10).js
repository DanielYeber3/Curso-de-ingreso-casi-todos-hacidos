function mostrar()
{
//Genero el número RANDOM entre 1 y 10 
var num;

num= Math.floor(Math.random() * 10) + 1;

if (num >= 9)
{
	alert("Excelente " + num )
}
else 
{
	
	if (num >= 4 )

	alert("APROBÓ " + num) 

		else 

		alert("Vamos, la proxima se puede " + num)
}



}

//FIN DE LA FUNCIÓN


/*"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/