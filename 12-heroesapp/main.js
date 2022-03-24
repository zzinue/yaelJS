const dataHeroes = document.getElementById('dataHeroes')

let heroes = [{
    nombre: "",
    alias: "",
    imagen: ""
}]


const guardarHeroe = (e) => {
    e.preventDefault()
    const inputsHtml = e.target.querySelectorAll('input')
    const inputs = Array.from(inputsHtml)
    let heroe = {}
    inputs.forEach((input) => {
        heroe[input.name] = input.value
    })
    console.log(heroe);
    heroes.push(heroe)
    const row = crearRow(heroes.length, heroe)
    dataHeroes.append(row)

}

const crearRow = (index, heroe) => {
    const tr = document.createElement('tr')
    const th = document.createElement('th')
    th.innerText = index
    const tdNombre = document.createElement('td')
    const tdAlias = document.createElement('td')
    const tdImagen = document.createElement('td')

    tdNombre.innerText = heroe.nombre
    tdAlias.innerText = heroe.alias
    tdImagen.innerText = heroe.imagen
    tr.append(th)
    tr.append(tdNombre)
    tr.append(tdAlias)
    tr.append(tdImagen)
    return tr

}
const buscarHeroe = (e) => {
    const elementoBusqueda = e.target.value
    console.log(elementoBusqueda)
}
heroes.forEach((heroe) => {
    const row = crearRow(heroes.length, heroe)
    dataHeroes.append(row)
})