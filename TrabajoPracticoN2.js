/*1. Crear una clase de Auto con los atributos (marca, modelo, potencia, max. velocidad)
Crear 5 autos en un array
Iterar el array y mostrar los autos por pantalla
Iteramos los autos y calculamos con un método (calcular tiempo) cuanto tarda en forma óptima en recorrer x kms
Hacer casos de prueba */


class Auto{
    constructor(marca, modelo, potencia, maxVelocidad){
        this.marca = marca;
        this.modelo = modelo;
        this.potencia = potencia;
        this.maxVelocidad = maxVelocidad;
        }

    mostrarAuto(){
        return `\nMarca del auto: ${this.marca}\nModelo del auto: ${this.modelo}\nPotencia del auto: ${this.potencia}\nVelocidad Maxima del auto: ${this.maxVelocidad}km/h `;
    }
    calcularTiempo(kilometros){
        let tiempoTotal = kilometros /this.maxVelocidad ;
        return tiempoTotal;
    }
}



const arrayAutos= [new Auto("Fiat","Uno", "80cv", 120),
                  new Auto("Peugeot","208","90cv",140 ),
                  new Auto("BMW","M3","120cv", 220 ),
                  new Auto("Chevrolet","Corsa","85cv", -150),
                  new Auto("Renault","Sandero","95",160)];


let km= 1000;
// mostrar autos por pantalla
for (let i of arrayAutos){
    //casos de prueba
    if (i.calcularTiempo(km)>0){
        console.info (i.mostrarAuto());
    console.info (i.calcularTiempo(km)+" hs");
    }
    if (i.calcularTiempo(km) == 0){
        console.info (i.mostrarAuto());
        console.error("el auto no se movio.");
    }
    // if (typeof(i.calcularTiempo(km)) === "string"){
    //     console.info (i.mostrarAuto());
    //     console.error("tipo de dato incorrecto");
    // }
    if (i.calcularTiempo(km)< 0 || i.maxVelocidad < 0){
        console.info (i.mostrarAuto());
        console.error("variable km mal definida, no puede ser negativo");
    }
    
}





console.info("\n --------------------------------------- \n");


//2. Crear una clase Escuela (1) que tiene un listado de Cursos (2) al cual se le asignan Alumnos (2)


class Escuela {
    constructor(nombreEscuela, curso, alumnoUno, alumnoDos) {
        this._nombreEscuela = nombreEscuela;
        this._curso = curso;
        this._alumnoUno = alumnoUno;
        this._alumnoDos = alumnoDos;
    }
    mostrarEscuela() {
        console.info(`Nombre Escuela: ${this._nombreEscuela}\nCurso: ${this._curso}\nAlumno 1: ${this._alumnoUno}\nAlumno 2: ${this._alumnoDos}`);
    }
}
const cursoUno = new Escuela("Capitan Daniel Manzotti", "Electronica", "Lautaro Décima", "Sofia Gomez");
const cursoDos = new Escuela("Capitan Daniel Manzotti", "Electricidad", "Maria Becerra", "Juan Perez");
cursoUno.mostrarEscuela();
cursoDos.mostrarEscuela();

/*
3. Crear una clase Cuenta Bancaria a la cual le podemos asignar fondos y sacar fondos
Si le asignamos más de 500000 disparamos una alarma
Si intentamos sacar más de lo que disponemos disparamos otra alarma
Si intentamos sacar más de 100000 disparamos otra alarma

*/

/*
3. Crear una clase Cuenta Bancaria a la cual le podemos asignar fondos y sacar fondos
Si le asignamos más de 500000 disparamos una alarma
Si intentamos sacar más de lo que disponemos disparamos otra alarma
Si intentamos sacar más de 100000 disparamos otra alarma

*/
class CuentaBancaria {
    constructor(fondos) {
        this._fondos = fondos;
    }
    consultarFondo() {
        return `Fondos disponibles: ${this._fondos}`;
    }
    asignarFondos(monto) {
        if (monto > 500000) {
            return "Alarma N°1: Ingresaste mas de $500000";
        }
        this._fondos += monto;
        return `monto asignado: $${monto}  -  fondos totaltes: $${this._fondos}`;
    }
    sacarFondos(monto) {
        if (monto > this._fondos || monto > 100000) {
            return "Alarma N°2: Intentas sacar mas de lo que tenes";
        }
        this._fondos -= monto;
        return `extrayendo:$${monto} - fondos totales:$${this._fondos}`;
    }
}
let cuenta = new CuentaBancaria(50000);
console.info(cuenta.consultarFondo());
console.info(cuenta.asignarFondos(560000));
console.info(cuenta.sacarFondos(150000));

// mail profesor: hugodpn@gmail.com