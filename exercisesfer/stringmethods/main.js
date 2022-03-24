//exercise 1: 
/* function nameFormatted(name, lastName) {
    let nameTransformed = name.toLowerCase()
    let lastNameTransformed = lastName.toUpperCase()
    let textJoined = (`${nameTransformed} ${lastNameTransformed}`)
    return textJoined
}
console.log(nameFormatted('VICTOr', 'guerrero CORTEZ')) */

//exercise 2: 
/* let nameLength = prompt('enter your name: ')
let counter = /[a-z]/g

let founder = nameLength.match(counter)

console.log(founder) */

//exercise 3: 
/* let nameLength = prompt('enter your name: ')
let counter = /[a,e,i,o,u]/g

let founder = nameLength.match(counter)

console.log(founder) */

//exercise 4:
/* let studentPhrase = 'Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado'

function count(studentPhrase, find) {
    return (studentPhrase.split(find)).length - 1;
}

console.log(count(studentPhrase, "estudiante"))

let result = studentPhrase.replaceAll('estudiante', 'koder')
console.log(result) */

//exercise 5: 
/* let firstString = 'the are many topics'
let secondString = 'the are many topics'
let lengthfirstString = firstString.length
let lengthSecondString = secondString.length

if (lengthfirstString > lengthSecondString) {
    console.log('el primer string es mas largo')
} else if (lengthSecondString > lengthfirstString) {
    console.log(' el segundo string es mas largo')

} else console.log('both string are the same') */

//exercise 6: not finished yet
/* let compareStrings= 'Hola Mundote'

function compare (compareStrings){

}
 */

// exercise 7: 
/* let enterPhrase = prompt('Enter a phrase: ')

function matchingPhrase(enterPhrase, find) {
    return (enterPhrase.split(find)).length - 1
}
console.log(matchingPhrase(enterPhrase, 'hola')) */

//exercise 8 : 
function reverseString(str) {
    let split = str.split('')
    let reverseString = split.reverse()
    let join = reverseString.join('')
    return join
}
console.log(reverseString('kodemia'))