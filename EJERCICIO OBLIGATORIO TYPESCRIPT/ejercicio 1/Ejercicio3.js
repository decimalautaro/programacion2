/*
3. Crear una clase Cuenta Bancaria a la cual le podemos asignar fondos y sacar fondos
Si le asignamos más de 500000 disparamos una alarma
Si intentamos sacar más de lo que disponemos disparamos otra alarma
Si intentamos sacar más de 100000 disparamos otra alarma

*/
var CuentaBancaria = /** @class */ (function () {
    function CuentaBancaria(fondos) {
        this._fondos = fondos;
    }
    CuentaBancaria.prototype.consultarFondo = function () {
        return "Fondos disponibles: " + this._fondos;
    };
    CuentaBancaria.prototype.asignarFondos = function (monto) {
        if (monto > 500000) {
            return "Alarma N°1: Ingresaste mas de $500000";
        }
        this._fondos += monto;
        return "monto asignado: $" + monto + "  -  fondos totaltes: $" + this._fondos;
    };
    CuentaBancaria.prototype.sacarFondos = function (monto) {
        if (monto > this._fondos || monto > 100000) {
            return "Alarma N°2: Intentas sacar mas de lo que tenes";
        }
        this._fondos -= monto;
        return "extrayendo:$" + monto + " - fondos totales:$" + this._fondos;
    };
    return CuentaBancaria;
}());
var cuenta = new CuentaBancaria(50000);
console.info(cuenta.consultarFondo());
console.info(cuenta.asignarFondos(560000));
console.info(cuenta.sacarFondos(150000));
