/* let hands = ['rock', 'paper', 'scissor']
let gethand = () => {
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}
console.log(gethand()) */

const recortVideoOne = new Promise((resolve, reject) => {
    resolve('video 1 recorder')
})
const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('video 2 recorded')
})
const recordVideoThree = new Promise((resolve, reject) => {
    resolve('video 3 recorded')
})

Promise.race([
    recortVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message)
})