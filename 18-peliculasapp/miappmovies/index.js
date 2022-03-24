//Cuando se pone un punto es porque realiza la busqueda por el nombre de la clase
const containerCards = document.querySelector('.row')
    //console.log(containerCards);

const apiUrl = 'https://api.themoviedb.org/3'
const apiKey = 'e544f0d1361e9e8af242fe99dec75cbf'
const urlPoster = 'https://image.tmdb.org/t/p/original'

const recuperarPopulares = () => {
    const url = `${apiUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`


    fetch(url)
        .then(respuesta => respuesta.json())
        .then((body) => {
            const peliculas = body.results
            peliculas.forEach(pelicula => {
                console.log(pelicula)
                containerCards.insertAdjacentHTML('beforeend', createCard(pelicula))
            })
        })
}

const createCard = (pelicula) => {
    return `
            <div class="card col-sm-4" ondblclick="irPelicula('${pelicula.id}')">
            <img src="${urlPoster}${pelicula.backdrop_path}" class="card-img-top" alt="">
            <div class="card-body">
            <h3 class= 'text-center'>${pelicula.original_title}</h3>
            <p class="card-text">${pelicula.overview}</p>
            </div>
            </div>`
}


const irPelicula = (peliculaId) => {
    window.location.assign(`/pelicula.html?id=${peliculaId}`)
}

recuperarPopulares()