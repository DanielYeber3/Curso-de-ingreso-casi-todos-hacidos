function mostrar()
{  
var mesDelAnio = document.getElementById('mes').value;


switch(mesDelAnio){
    case "Enero" :
    case "Febrero" :
    case "Marzo" :
    case "Abril" :
    case "Mayo" :
    case "Junio" :
            alert("Falta para el invierno.")
                break;
    case "Julio" :
    case "Agosto" :
        alert("Abrigate querido por el amor de dios.")
            break;
    case "Septiembre" :
    case "Octubre" :
    case "Noviembre" :
    case "Diciembre" :
            alert("Ya pasamos el frio, ahora calor !!")
            break;
}

}

/*
al seleccionar un mes informar. 
si estamos en Invierno: "Abrigate que hace frio." 
si aún no llego el Invierno: "Falta para el invierno." 
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!." 
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/