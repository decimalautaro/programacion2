//2. Crear una clase Escuela (1) que tiene un listado de Cursos (2) al cual se le asignan Alumnos (2)

class Escuela{
    _nombreEscuela:string;
    _curso:string;
    _alumnoUno: string;
    _alumnoDos: string;
    constructor(nombreEscuela:string,curso:string,alumnoUno:string, alumnoDos:string){
    this._nombreEscuela = nombreEscuela
    this._curso = curso;
    this._alumnoUno = alumnoUno;
    this._alumnoDos = alumnoDos;
}
mostrarEscuela(){
    console.info(`Nombre Escuela: ${this._nombreEscuela}\nCurso: ${this._curso}\nAlumno 1: ${this._alumnoUno}\nAlumno 2: ${this._alumnoDos}`)
}
}

const cursoUno = new Escuela("Capitan Daniel Manzotti","Electronica","Lautaro Décima","Sofia Gomez");
const cursoDos = new Escuela ("Capitan Daniel Manzotti","Electricidad","Maria Becerra","Juan Perez");

cursoUno.mostrarEscuela();
cursoDos.mostrarEscuela();