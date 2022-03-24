const crearItemPelicula = (nombrePelicula) => {
    const li = document.createElement('li')
    li.classList.add('list-group-item')
    li.innerText = nombrePelicula
    return li
}

const peliculas = [
    'Conoces a John Black',
    'Robots',
    'La sombra del amor',
    'Soy leyenda',
    'El hombre bicentenario',
    'Forrest Gump',
    'Tres hombres de cuidado',
    'Memento',
    'Cien pies humano',
    'Iron-man',
    'Gladiador'
]
const containerPelicula = document.getElementById('listaPeliculas')
peliculas.forEach((peliculas) => {
    const li = crearItemPelicula(peliculas)
    containerPelicula.append(li)
})