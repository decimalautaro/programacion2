var Auto = /** @class */ (function () {
    function Auto(marca, modelo, potencia, maxVelocidad) {
        this._marca = marca;
        this._modelo = modelo;
        this._potencia = potencia;
        this._maxVelocidad = maxVelocidad;
    }
    Auto.prototype.mostrarAuto = function () {
        return "Marca del auto: " + this._marca + " \nModelo del auto: " + this._modelo + "\n potencia del auto: " + this._potencia + "\nvelocidad maxima del auto: " + this._maxVelocidad;
    };
    Auto.prototype.calcularTiempo = function (kilometros) {
        var tiempoTotal = kilometros / this._maxVelocidad;
        return tiempoTotal;
    };
    return Auto;
}());
var arrayAutos = [new Auto("Fiat", "Uno", "80cv", 120),
    new Auto("Peugeot", "208", "90cv", 140),
    new Auto("BMW", "M3", "120cv", 220),
    new Auto("Chevrolet", "Corsa", "85cv", -150),
    new Auto("Renault", "Sandero", "95", 160)];
var km = 2000;
//Mostrar autos por pantalla
for (var _i = 0, arrayAutos_1 = arrayAutos; _i < arrayAutos_1.length; _i++) {
    var i = arrayAutos_1[_i];
    if (i.calcularTiempo(km) > 0) {
        console.info(i.mostrarAuto());
        console.info(i.calcularTiempo(km) + " hs");
    }
    if (i.calcularTiempo(km) == 0) {
        console.info(i.mostrarAuto());
        console.error("el auto no se movio.");
    }
    if (i.calcularTiempo(km) < 0 || i._maxVelocidad < 0) {
        console.info(i.mostrarAuto());
        console.error("variable km mal definida, no puede ser negativo");
    }
}
