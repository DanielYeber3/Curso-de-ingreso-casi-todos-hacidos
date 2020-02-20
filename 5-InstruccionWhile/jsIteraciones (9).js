function mostrar()
{
var respuesta='si';
var num;
var max;
var min;

	
num=prompt("ingrese un numero: ");

min= num;
max= num;

respuesta= prompt("desea ingresar otro numero?: ");


while(respuesta !="no"){
	
	num=prompt("Ingrese otro numero: ");
	
	if(num<min){

		min=num;

	}

	if(num>max){
	max=num;
	}

	respuesta = prompt("desea ingresar otro numero?: ")
}

document.getElementById("minimo").value=min;
document.getElementById("maximo").value=max;

}