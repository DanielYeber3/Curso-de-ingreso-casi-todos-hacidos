function mostrar()
{
//tomo la edad  
var age;
var cs;

    age= document.getElementById("edad").value;
    cs= document.getElementById("estadoCivil").value;

if (age > 18 && cs != "Casado" && cs != "Divorciado" )
{
    alert("Es soltero y no es menor")
}



	


}//FIN DE LA FUNCIÓN


/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA, 
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'*/