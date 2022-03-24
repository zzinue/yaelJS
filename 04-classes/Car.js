export default class Car {
    color;
    modelo;
    marca;
    placas;
    dueno;
    estado;

    constructor(color, modelo, marca, placas, dueno, estado) {
        this.color = color
        this.modelo = modelo
        this.marca = marca
        this.placas = placas
        this.dueno = dueno
        this.estado = estado

    }
    encender() {
        console.log(`el carro de ${this.dueno} esta encendido`)
    }
    iniciarGrabacion() {
        if (this.marca === 'tesla') {
            console.log('iniciando grabacion')
            return
        }
        console.log('tu carro no tiene esta funcion')
    }
    acelerar(kmPorHora) {
        console.log(`el carro de ${this.dueno} va a ${kmPorHora} km/hr`)
    }


    toJson() {
        const car = {
            color: this.color,
            model: this.modelo,
            marca: this.marca,
            placas: this.placas,
            dueno: this.dueno,
            estado: this.estado,
        }
        return JSON.stringify(car)
    }
    
    toObjetoliteral() {

        return {
            color: this.color,
            model: this.modelo,
            marca: this.marca,
            placas: this.placas,
            dueno: this.dueno,
            estado: this.estado,
        }
    }
}