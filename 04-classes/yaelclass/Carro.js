export default class Carro {
    color;
    modelo;
    marca;
    placas;
    dueno;
    estado;
    
    constructor(color, modelo, marca, placas, dueno, estado) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.placas = placas;
        this.dueno = dueno;
        this.estado = estado;
    }

    encender() {
        console.log(`El carro de ${this.dueno} esta encendido`);
    }

    acelerar(kmPorHora) {
        console.log(`El carro de ${this.dueno} va a ${kmPorHora} km/h`);
    }

    iniciarGrabacion() {
        if (this.marca.toLowerCase() === 'tesla') {
            console.log('Iniciando grabación');

        } else {
            console.log('Tu carro no tiene esta función');
        }
    }

    toJson() {
        const carro = {
            color: this.color,
            modelo: this.modelo,
            marca: this.marca,
            placas: this.placas,
            dueno: this.dueno,
            estado: this.estado
        };
        return JSON.stringify(carro);
    }

    toObjetoLiteral() {
        return {
            color: this.color,
            modelo: this.modelo,
            marca: this.marca,
            placas: this.placas,
            dueno: this.dueno,
            estado: this.estado
        };
    }

}