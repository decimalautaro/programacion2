/*

2. Dado el array ["azul", "verde", "rojo"] insertar la cadena "amarillo" entre "azul" y "verde".
 También insertar "naranja" entre "verde" y "rojo". No se puede usar bucles. Usar una función que imprima por pantalla.
 
 */
function imprimirPantall(array) {
    return array;
}
var array = ["azul", "verde", "rojo"];
//insertar "amarillo" entre "azul y verde"
array.splice(1, 0, "amarillo");
console.info(imprimirPantall(array));
