//2. Crear una clase Escuela (1) que tiene un listado de Cursos (2) al cual se le asignan Alumnos (2)
var Escuela = /** @class */ (function () {
    function Escuela(nombreEscuela, curso, alumnoUno, alumnoDos) {
        this._nombreEscuela = nombreEscuela;
        this._curso = curso;
        this._alumnoUno = alumnoUno;
        this._alumnoDos = alumnoDos;
    }
    Escuela.prototype.mostrarEscuela = function () {
        console.info("Nombre Escuela: " + this._nombreEscuela + "\nCurso: " + this._curso + "\nAlumno 1: " + this._alumnoUno + "\nAlumno 2: " + this._alumnoDos);
    };
    return Escuela;
}());
var cursoUno = new Escuela("Capitan Daniel Manzotti", "Electronica", "Lautaro Décima", "Sofia Gomez");
var cursoDos = new Escuela("Capitan Daniel Manzotti", "Electricidad", "Maria Becerra", "Juan Perez");
cursoUno.mostrarEscuela();
cursoDos.mostrarEscuela();
