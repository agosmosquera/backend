class Contador {
    constructor(nombre){
        this.nombre =nombre;
        this.valor = 0
    }

    static contadorGlobal = 0;

    incrementar(){
        this.valor++;
    }


    obtenerValor(){
        return this.valor
    }
     
    static obtenerContadorGlobal() {
        return Contador.contadorGlobal;
    }

    getResponsable(){
        return this.nombre;
    }


}

let contador1 = new Contador("Bruno");
contador1.incrementar();
contador1.incrementar();
contador1.incrementar();
let contador2 = new Contador("Pepe");
contador2.incrementar();
console.log(contador1.getResponsable());
console.log(contador1.obtenerValor());
console.log(contador2.getResponsable());
console.log(contador2.obtenerValor());

console.log(Contador.obtenerContadorGlobal());