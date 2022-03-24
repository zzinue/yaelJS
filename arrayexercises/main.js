console.log('hola')


const generateRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
}
console.log(generateRandomNumber(0, 100))

let randomNumber = ''

do {
    randomNumber = parseInt(prompt('enter a number'))



} while (randomNumber === generateRandomNumber(0, 100))