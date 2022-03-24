//exercise 1 while, do while and for: 
/* let scores = ''
let counter = 0
let sum = 0

do {
    scores = prompt('Enter your scores: ')
    if (parseInt(scores) && scores > 0) {
        sum = sum + parseInt(scores)
        counter = counter + 1
        let average = sum / counter
        console.log(`La cantidad de califacaciones que ingresaste es: ${counter}`)
        console.log(`el promedio general del alumno es: ${average}`)
    }

} while (scores > 0) */

//Exercise 2 :
/* let fitNumber = ''
do {
    fitNumber = parseInt(prompt('Enter a number that fit the 1-5 range'))


} while (!(fitNumber > 0 && fitNumber <= 5)) */

//Exercise 3 : 
/* let firstNumber = ''
let secondNumber = ''
do {
    firstNumber = parseInt(prompt('Enter the first number'))
    secondNumber = parseInt(prompt('Enter the second number; this have to be equal to the first'))

} while (secondNumber !== firstNumber) console.log('The numbers fit in Thank you!') */


//exercise 4 : 
/* let phrase = prompt('Enther the phrase: ')
let letter = prompt('Enter the letter to search:')
let counter = 0

 let foundedPletter = phrase.search(letter)
if (foundedPletter >= 1) {
    console.log(`the letter ${letter}  in position '${foundedPletter}'`)

} else alert(`there is no "${letter}" in that phrase`)  */

//exercise 5 : 
/* 
let age = prompt('What is your age:')

for (let i = 1; i < age; i++) {
    console.log(i)
}
console.log(`You have lived ${age} years`) */

//exrcise 6 : 
/* let password = ''
do {
    password = prompt('Enter the correct password')

} while (password !== 'f')
alert('Welcome Victor') */

//Exercise 7: 

/* let number1 = parseInt(prompt('Enter the first number'))
let number2 = parseInt(prompt('Enter the second number'))
let counter = number1

for (let i = number1; i <= number2; i++) {
    if (i % 2 == 0) {
        console.log(i)

    }

} */
//exercise 8:
/* let number1 = parseInt(prompt('Enter the first number'))
let number2 = parseInt(prompt('Enter the second number'))
let counter = number1

for (let i = number1; i <= number2; i++) {
    if (i % 2 == 1) {
        console.log(i)

    }

} */

//exercise 9 : 
/* let pairNumber = parseInt(prompt('Enter a number '))
for (let i = 1; i <= pairNumber; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
} */

//Exercise10: 
/* let triangle = parseInt(prompt('Enter a number'))
let result = ''

for (let i = 0; i <= triangle; i++) {

    result += '*'

    console.log(result)
} */