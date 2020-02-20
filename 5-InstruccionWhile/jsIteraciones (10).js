/*function mostrar()
{
var contadorc=0;
var contadorp=0;
var acumuladorp=0
var acumuladorn=0
var num=0;
//var num2=0; 
var respuesta="si";
var resultadop;
var resultadon;

num=parseInt(prompt("ingrese un numero: "));

respuesta= prompt("desea ingresar otro numero?: ");

	while(respuesta!="no")
	{

		if(num>=1){
			num= parseInt(prompt("Ingrese otro numero: "));	

			resultadop= num+num

			//acumuladorp=acumuladorp + resultadop;////////////////////
		}
		/if(num==0){
									///////////////////
			contadorc ++;

		}if(num<0){
			num= parseInt(prompt("Ingrese otro numero: "));	

			resultadon= num+num
		
			//acumuladorn= acumuladorn //////////////////////
		}
	
	
	
	
	
	
	
	respuesta= prompt("desea ingresar otro numero?: ");
	
	
	
	}

	document.write("suma de los positivos: "+resultadop);
	//document.write("suma de los negativos: "+resultadon);
	//document.write("cantidad de positivos: "+acumuladorp);


}*/



/*Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos. acumulador
4-Cantidad de negativos. acumulador
5-Cantidad de ceros. contador
6-Cantidad de números pares. contador /////////
7-Promedio de positivos. acumulador + contador
8-Promedios de negativos. acumulador + contador
9-Diferencia entre positivos y negativos, (positvos-negativos).*/ //////////

function mostrar()
{    
var respuesta="si";
var acumuladorp=0;
var acumuladorn=0;
var contadorc=0;
var contadornp=0;
var valor;
var vneg;
var vpos;
var result
var contadorp=0;
var contadorn=0;

valor=parseInt(prompt("ingrese un numero: "));

/*vpos=parseint(vpos) = valor;
vneg=parseInt(vneg) = valor;

/*vpos = valor;
vneg = valor;*/

respuesta= prompt("desea ingresar otro numero?: ");

	while(respuesta!="no")
	{
		valor=parseInt(prompt("ingrese un numero: "));

		if(valor%2==0){

			contadornp ++;
		}



		if (valor == 0){

			contadorc ++;

		}

		if(vpos>=1){
			
			valor=parseInt(prompt("ingrese un numero: "));


			contadorp ++;


			vpos = vpos + valor;
		

		}if(vneg<=0){


			vneg = vneg + valor;

			contadorn ++;

		}
		 
	
	respuesta= prompt("desea ingresar otro numero?: ");
	}

	document.write("suma de los positivos: "+ vpos + "<br>")
	document.write("suma de los negativos: "+ vneg + "<br>");
	document.write("cantidad de positivos: "+ contadorp + "<br>");
	document.write("cantidad de negativos: "+ contadorn + "<br>");
	document.write("cantidad de ceros: "+ contadorc + "<br>");
	document. write("cantidad de numeros pares: " + contadornp + "<br>");
	//document.write("")
}


