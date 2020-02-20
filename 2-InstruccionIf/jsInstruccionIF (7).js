function mostrar()
{
//tomo la edad  
var age
var cs

    age= document.getElementById("edad").value;
    cs= document.getElementById("estadoCivil").value;

if (age <18 && cs != "Soltero")
{
    alert("Es muy pequeño para no ser soltero.")
}


}//FIN DE LA FUNCIÓN