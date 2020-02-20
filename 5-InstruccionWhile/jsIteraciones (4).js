function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

/*do{
	numero= prompt("ingrese un numero entre el 0  y 10.")

}*/

while(numero<0 || numero>9)
{
	numero = prompt("ingrese un numero entre 0 y 10.")
}

alert("bien ahy")

}//FIN DE LA FUNCIÓN