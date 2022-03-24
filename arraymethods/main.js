let files = [
    'SUBIN.midi',
    'LOTSTRING.wpl',
    'GREENLAM KODEMIA.wma',
    'RONSTRING.divx',
    'TRES-ZAP.mpg',
    'SONAIR.rar',
    'VIVA KODEMIA.midi',
    'TRES-ZAP KODEMIA.rar5',
    'VIVA.wav',
    'BITWOLF.gz',
    'TRES-ZAP.wav'
]
let array = files.map((value) => value.toLowerCase())
console.log(array)

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
number.forEach((number1) => {
    console.log(number1)
})
console.log(number.find((value) => value == 8))