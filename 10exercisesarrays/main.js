//exercise 1 
/* let counter = 10

while (counter >= 0) {
    console.log(counter)

    counter--
} */

//exercise 2 : 

/* let enterNumber = []

for (let i = 1; i <= 10; i++) {
    enterNumber = parseInt(prompt(`Enter number ${i}`))
    const findingNumer = (element) => element = 1
    console.log(findingNumer)

}
console.log(enterNumber.findIndex(findingNumer)) */


// examples of arrays: 

/* let entero = parseInt(prompt('Introduce un número entero del 1 al 12'))
if (entero > 0 && entero <= 12) {
    for (let result = 1; result <= 9; result++) {
        let multiplicación = result * entero
        console.log(`${entero} x ${result} = ${multiplicación}`)
    }

} else {
    alert('No esta dentro del rango 1-12')
} */

//exercise 3: 
/* let number = 1
let numeros = ''
while (number !== 0) {
    prompt('Dame un numero')
    numeros
    if (numeros == 0) {
        number = numeros
    }

} */


//exercise 7:
/* let enterStrings = prompt('please enter some words: ')
const toArray = enterStrings.split(',')
console.log(toArray)
 */

//exercise 8: 

/* const colors = ["azul", "amarillo", "rojo", "verde", "café", "rosa"]
let introduce = prompt('Introduce un color:').toLocaleLowerCase()
console.log(colors.includes(introduce)) */

//exercise 9:  
const words = 'we will reach the sky'
const findVocals = (words) => {
    const vowels = [a, e, i, o, u]
    let result = []
    for (let i = 0; i <= words.length; i++) {
        const character = words[i]
        console.log(words)
    }
}