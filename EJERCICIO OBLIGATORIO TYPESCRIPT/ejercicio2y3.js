/*

2. Dado el array ["azul", "verde", "rojo"] insertar la cadena "amarillo" entre "azul" y "verde".
 También insertar "naranja" entre "verde" y "rojo". No se puede usar bucles. Usar una función que imprima por pantalla.
 
 */
function imprimirPantalla(array) {
    return array;
}
var array = ["azul", "verde", "rojo"];
//insertar "amarillo" entre "azul y verde"
array.splice(1, 0, "amarillo");
console.info(imprimirPantalla(array));
//[ 'azul', 'amarillo', 'verde', 'rojo' ]
/* 3. Dado el ejercicio anterior sacar del arreglo el color "verde"  */
array.splice(3, 1);
console.info(imprimirPantalla(array));
//[ 'azul', 'amarillo', 'verde' ]
