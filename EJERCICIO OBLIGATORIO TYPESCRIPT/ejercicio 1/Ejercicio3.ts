/*
3. Crear una clase Cuenta Bancaria a la cual le podemos asignar fondos y sacar fondos
Si le asignamos más de 500000 disparamos una alarma
Si intentamos sacar más de lo que disponemos disparamos otra alarma
Si intentamos sacar más de 100000 disparamos otra alarma

*/

class CuentaBancaria{
    _fondos:number;
    constructor(fondos:number){
        this._fondos = fondos;
       
    }

    consultarFondo(){
        return `Fondos disponibles: ${this._fondos}`;
    }

    asignarFondos(monto:number){
       
        if (monto > 500000){
            return "Alarma N°1: Ingresaste mas de $500000"
        }
        this._fondos+= monto;
        return `monto asignado: $${monto}  -  fondos totaltes: $${this._fondos}`;
    }
    sacarFondos(monto:number){
        if (monto> this._fondos || monto > 100000){
            return "Alarma N°2: Intentas sacar mas de lo que tenes"
        }
        this._fondos -= monto;
        return `extrayendo:$${monto} - fondos totales:$${this._fondos}`;
    }
}
let cuenta = new CuentaBancaria(50000);
console.info(cuenta.consultarFondo());
console.info(cuenta.asignarFondos(560000));
console.info(cuenta.sacarFondos(150000));