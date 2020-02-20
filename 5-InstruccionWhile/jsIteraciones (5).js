function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(sexo != "m" && sexo != "f"){

    alert("mal ahy")

    sexo = prompt("ingrese f ó m .")
}

document.getElementById('Sexo').value=sexo;

    alert("bien ahy")


}//FIN DE LA FUNCIÓN