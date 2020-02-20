function mostrar()
{
	var positivo=0;
	var negativo=1;
	var valor;
	var respuesta='si';

do{

	valor= prompt("Ingrese un número: ")
if(valor>=0){

	positivo= positivo + parseInt(valor);
	
}else{

	negativo= negativo * parseInt(valor);

}

	respuesta= prompt("desea ingresar otro numero?: ")
	
}while(respuesta== "si" || respuesta== "SI")





document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN