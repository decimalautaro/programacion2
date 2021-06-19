

class CuentaBancaria{
    protected saldo: number;
    constructor (saldo: number){
        this.saldo = saldo;
    }
    Saldo(){
        return `el saldo es: $${this.saldo}`; 
    }
    depositarMonto(monto:number){
        this.saldo += monto;
        return `el dinero depositado es: $${monto}`;
    }
    extraerMonto (monto:number){
        this.saldo -= monto;
        return `la extraccion fue de $${monto}`;
    }
}

class CajaAhorro extends CuentaBancaria{
    private extraccionesPosibles: number;
    constructor(saldo: number, extraccionesPosibles:number){
        super(saldo);
        this.extraccionesPosibles = extraccionesPosibles;
    }
    
    extraccionPosible(){
        return `la extraccion que puede realizar es de: $${this.extraccionesPosibles}`;
    }


    realizarExtraccion(monto:number){
        if (monto > this.extraccionesPosibles){
            
            return "no se puede realizar la extraccion, el monto es elevado";
        }
        else{
            this.saldo -= monto;
            return `la extraccion realizada fue de $${monto}`;
        }
        
    }


}

class CuentaCorriente extends CuentaBancaria{
    private extraccionPermitida:number;
    constructor(saldo:number, extraccionPermitida:number){
        super(saldo);
        this.extraccionPermitida= extraccionPermitida;
    }
    puedoExtraer(){
        return `el monto de $${this.extraccionPermitida} se puede extraer`;
    }
    realizarExtraccion(monto:number){
        if (monto > this.extraccionPermitida){
            return `no se puede realizar la operacion, monto elevado`;
        }
        else{
            this.saldo-= monto;
            return `la extraccion de $${monto} se realizo con exito`;
        }
        
    }

}

const CUENTA1 = new CuentaBancaria (30000);
console.info(CUENTA1.Saldo());
console.info(CUENTA1.depositarMonto(5000));
console.info(CUENTA1.Saldo());

console.info(CUENTA1.extraerMonto(10000));
console.info(CUENTA1.Saldo());

// -------------------------
console.info("--------------------------------------------------");

const CUENTA2 = new CajaAhorro (20000, 5000);
console.info(CUENTA2.Saldo());
console.info(CUENTA2.extraccionPosible());
console.info(CUENTA2.realizarExtraccion(21000));
console.info(CUENTA2.Saldo());
console.info(CUENTA2.depositarMonto(5000));
console.info(CUENTA2.Saldo());
console.info(CUENTA2.extraerMonto(1111));
console.info(CUENTA2.Saldo());

// --------------------------
console.info ("-------------------------------------------------")

const CUENTA3 = new CuentaCorriente( 10000,3500);
console.info(CUENTA3.Saldo());
console.info (CUENTA3.puedoExtraer());
console.info (CUENTA3.realizarExtraccion(3480));
console.info(CUENTA3.Saldo());
console.info(CUENTA2.depositarMonto(15000));
console.info(CUENTA2.Saldo());
console.info(CUENTA2.extraerMonto(99));
console.info(CUENTA2.Saldo());

