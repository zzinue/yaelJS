const containerCards = document.querySelector('.row')
    //console.log(containerCards);

const apiUrl = 'https://api.themoviedb.org/3'
const apiKey = 'e544f0d1361e9e8af242fe99dec75cbf'
const urlPoster = 'https://image.tmdb.org/t/p/original'

const recuperarSeries = () => {
    const urlSeries = `${apiUrl}/tv/popular?api_key=${apiKey}&language=en-US&page=1`

    fetch(urlSeries)
        .then(respuesta => respuesta.json())
        .then((body) => {
            const series = body.results
            series.forEach(serie => {
                console.log(serie)
                containerCards.insertAdjacentHTML('beforeend', createCardSerie(serie))
            })
        })
}
const createCardSerie = (serie) => {
    return `
            <div class="card col-sm-4" >
            <img src="${urlPoster}${serie.backdrop_path}" class="card-img-top" alt="">
            <div class="card-body">
            <h3 class= 'text-center'>${serie.original_name}</h3>
            <p class="card-text">${serie.overview}</p>
            </div>
            </div>`
}


recuperarSeries()