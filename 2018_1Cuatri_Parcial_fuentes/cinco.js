function mostrar()
{
var planeta;
    
planeta=prompt("Ingrese un planeta ")

switch(planeta){
    case "mercurio":
    case "venus":
        alert("acá hace mas calor");
            break;
    case "tierra":
        alert("acá vivimos");
            break;
    case "marte":
    case "jupiter":
    case "saturno":
    case "urano":
    case "neptuno":
    case "pluton":
        alert("acá hace mas frio")
            break;
    case "dani":
        alert("Es un capo")
            break;  
    default:
        alert("No es un plantea valido")
        
}



}


/*Bienvenidos (SWITCH). 
pedir el ingreso de un planeta del sistema solar 
Si es la tierra mostrar "acá vivimos". 
Si está más cerca del sol, "acá hace más calor". 
Si está más lejos del sol, "acá hace más frio". 
Si no es un planeta valido informarlo. 
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).*/