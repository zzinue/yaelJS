//Cuando se pone un punto es porque realiza la busqueda por el nombre de la clase
const containerCards = document.querySelector('.row')
    //console.log(containerCards);

const apiUrl = 'https://api.themoviedb.org/3'
const apiKey = 'e544f0d1361e9e8af242fe99dec75cbf'
const urlPoster = 'https://image.tmdb.org/t/p/original'
let peliculas = []

const recuperarPopulares = () => {
    const url = `${apiUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`


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
}

const createCard = (pelicula) => {
    return `
            <div class="card col-sm-4" ondblclick="irPelicula('${pelicula.id}')">
            <img src="${urlPoster}${pelicula.backdrop_path}" class="card-img-top" alt="">
            <div class="card-body">
            <h3 class= 'text-center'>(${pelicula.original_title})</h3>
            <p class="card-text">${pelicula.overview}</p>
            </div>
            <div class="d-flex justify-content-end mb-2">
            <button id="${pelicula.id}" onclick="marcarFavorito ('${pelicula.id}')" class= "btn btn-outline-danger"><i class="fa-solid fa-heart"></i></button>
            </div>
            </div>`
}

const marcarFavorito = (id) => {
    const pelicula = peliculas.find((pelicula) => pelicula.id === Number(id))
    crearPeliculaFavorita(
        pelicula.id,
        pelicula.backdrop_path,
        pelicula.original_title,
        pelicula.overview,
        (body) => {
            console.log(body);
            const button = document.getElementById(pelicula.id)
            button.classList.remove('btn-outline-danger')
            button.classList.add('btn-danger')
        }
    )
}

const irPelicula = (peliculaId) => {
    window.location.assign(`/pelicula.html?id=${peliculaId}`)
}

recuperarPopulares()