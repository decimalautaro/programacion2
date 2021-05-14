// Ejercicio A

let equipos = ["Boca","River","Independiente","Racing","Velez"];
function ValidarEquipo(equipos){
    
        switch (equipos){
            case "Boca":
                return "se encuetra entre la lista. ";
                break;
            case "River":
                return "se encuetra entre la lista. ";
                break;
            case "Independiente":
                return "se encuetra entre la lista. ";
                break;
            case "Racing":
                return "se encuetra entre la lista. ";
                 break;
            case "Velez":
                return "se encuetra entre la lista. ";
                break;
            default:
                return "no se encuentra en la lista."
        }
    }
    

let equipoElegido = "Boca";
console.info(equipoElegido +" " + ValidarEquipo(equipoElegido));

equipoElegido = "Chacarita"
console.info(equipoElegido +" " + ValidarEquipo(equipoElegido));

equipoElegido = "River";
console.info(equipoElegido +" " + ValidarEquipo(equipoElegido));

equipoElegido = "Independiente";
console.info(equipoElegido +" " + ValidarEquipo(equipoElegido));

equipoElegido = "Racing";
console.info(equipoElegido +" " + ValidarEquipo(equipoElegido));

equipoElegido = "Velez";
console.info(equipoElegido +" " + ValidarEquipo(equipoElegido));

equipoElegido = "San Lorenzo"
console.info(equipoElegido +" " + ValidarEquipo(equipoElegido));



// // Ejercicio B
function Conversion(metro){
    if (typeof metro === "number"){
        let kilometro= metro / 1000;
        return "la cantidad de metro a km es: "+kilometro+"km";
    }
    else{
        return "el dato ingresado no es un numero."
    }
}
let metro= 1500;
console.info(Conversion(metro));

metro= 1;
console.info(Conversion(metro));

metro= 154.514;
console.info(Conversion(metro));



// // Ejercicio C

let arreglo = [8,5,2,8,1,9,1];

function CantidadElementos(arreglo){
    return arreglo.length;
}


/*
function contarLongitudArray (arreglo){
    let contador = 0;
    for (let i in arreglo){
        contador +=1;

    }
    return contador;
}

console.info("Longitud de ARRAY es 7", contadorLongitudArray(ARRAY) === 7);  //prueba como si fuese unit test
console.info("Longitud de ARRAY es nulo", contadorLongitudArray(null) === 7);
console.info("Longitud de ARRAY es 7", contadorLongitudArray("Hola") === 7);
console.info("Longitud de ARRAY es 7", contadorLongitudArray(23) === 7);
*/

function SumarElementos(arreglo){
    let suma= 0;
    for(let i in arreglo){
        
        suma+= arreglo[i];
    }
    return suma;
}

/**
for(let i=0 , _len=arreglo.length ; i<_len ;i++){
suma += arreglo[i];

} 

 */

function ElementosOrdenados(arreglo){
    //return arreglo.reverse(); se ordena de mayor a menor
    return arreglo.sort();  //se ordena de menor a mayor
}

console.info("la dimension del arreglo es: "+CantidadElementos(arreglo));
console.info("la suma de los elementos del arreglo es: "+ SumarElementos(arreglo));
console.info("el arreglo ordenado es: "+ ElementosOrdenados(arreglo));