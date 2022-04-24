let peliculas = []
const crearPeliculaFavorita = (peliculaId, backdropPath, title, overview, funcion) => {
    //estructurando peticion
    const url = `${urlDb}/favoritos.json`
    const pelicula = { peliculaId, backdropPath, title, overview }
}

fetch(url)
    .then(respuesta => respuesta.json())
    .then((body) => {
        peliculas = body.results
        peliculas.forEach(pelicula => {
            console.log(pelicula)
            containerCards.insertAdjacentHTML('beforeend', createCard(pelicula))
        })
        recuperarFavoritos((body) => {
            const favoritos = Object.values(body)
            console.log(favoritos);
            favoritos.forEach((favorito) => {
                const button = document.getElementById(favorito.peliculaId)
                button.classList.remove('btn-outline-danger')
                button.classList.add('btn-danger')
            })
        })
    })


const createCard = (pelicula) => {
    return `
            <div class="card col-sm-4" ondblclick="irPelicula('${pelicula.id}')">
            <img src="${urlPoster}${pelicula.backdrop_path}" class="card-img-top" alt="">
            <div class="card-body">
            <h3 class= 'text-center'>${pelicula.original_title}</h3>
            <p class="card-text">${pelicula.overview}</p>
            </div>
            <div class="d-flex justify-content-end mb-2">
            <button id="${pelicula.id}" onclick="marcarFavorito ('${pelicula.id}')" class= "btn btn-outline-danger"><i class="fa-solid fa-heart"></i></button>
            </div>
            </div>`
}

recuperarPopulares()