export default class Heroe {
    name;
    girlfriend;
    powers;
    city;
    villians;

    constructor(name, girlfriend, powers, city, villians) {
        this.name = name
        this.girlfriend = girlfriend
        this.powers = powers
        this.city = city
        this.villians = villians
    }
    Phrase() {
        console.log(`${this.name}: 'No matter what I do, no matter how hard I try, the ones I love will always be the ones who pay' `)
    }
    throw () {
        if (this.name === 'Spiderman') {
            console.log(`you are ${this.name}:  throwing spider web`)
        } else console.log('this is not Spiderman')
    }
    fight(beat) {
        console.log(`as ${this.name} super heroe I have beating up ${beat} enemies`)
    }
    healing() {
        if (this.name === 'Venom' || this.name === 'Spiderman') {
            console.log(`You have the healing power recuperation!`)
        } else console.log('You are neither Spiderman nor Venom')
    }
    protectingCity() {
        if (this.city === 'Gotham') {
            console.log(`Gotham is mi city and I will protect it from villians`)

        } else console.log(`you are not Batman. you no live here`)
    }


    toJson() {
        const heroe = {
            name: this.name,
            girlfriend: this.girlfriend,
            powers: this.powers,
            city: this.city,
            villians: this.villians,
        }
        return JSON.stringify(heroe)
    }
    toliteralObject1() {
        return {
            name: this.name,
            girlfriend: this.girlfriend,
            powers: this.powers,
            city: this.city,
            villians: this.villians,
        }
    }
}