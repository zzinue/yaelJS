function recoverExtension(archiveName) {
    const extension = archiveName.split('.')
    return (extension[extension.length - 1])

}

function minusculasNombre(archivo) {
    const lastPointIndex = archivo.lastIndexOf('.')
    const name = archivo.substr(0, lastPointIndex)
    return name.toLowerCase()

}



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
console.log(minusculasNombre('GREENLAM KODEMIA.wma'))
console.log(recoverExtension('LOTSTRING.wpl'))


/* console.log(files) */
/* files.forEach((names) => console.log(names))
console.log('-------------------------')
console.log(files[1].toLowerCase())
console.log(files[1].split('.'))

console.log(files[files.length - 1])
 */
// resolución  por métodos :
//kodemia 

/* function findKodemiaWord(archiveName) {
    const archiveNamelower = archiveName.toLowerCase()
    console.log(archiveName.toLowerCase())
    if (archiveNamelower.search('kodemia') !== -1) {
        return true
    } else false;

} */