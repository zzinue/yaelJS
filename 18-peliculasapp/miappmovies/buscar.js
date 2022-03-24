const mostrarResultados = document.getElementById('resultados')
const buscarInput = document.querySelector('input')

const apiUrl = 'https://api.themoviedb.org/3'
const apiKey = 'e544f0d1361e9e8af242fe99dec75cbf'
const urlPoster = 'https://image.tmdb.org/t/p/original'


const buscarElemento = (e) => {
    e.preventDefault();
    limpiar()

    const terminoBusqueda = buscarInput.value
    const url = `${apiUrl}/search/multi?api_key=${apiKey}&language=en-US&query=${terminoBusqueda}`;

    fetch(url)
        .then(respuesta => respuesta.json())
        .then((body) => {
            const resultadosBusqueda = body.results
            resultadosBusqueda.forEach(resultado => {
                console.log(resultado)
                mostrarResultados.insertAdjacentHTML('beforeend', createCardBusqueda(resultado))
            })
        })
}
const createCardBusqueda = (resultado) => {
    return `
            <div class="card col-sm-4">
            <img src="${urlPoster}${resultado.poster_path}" class="card-img-top" alt="">
            <div class="card-body">
            <h3 class= 'text-center'>${resultado.original_title}</h3>
            <p class="card-text">${resultado.overview}</p>
            </div>
            </div>`
}
const limpiar = () => {
    document.getElementById('resultados').innerHTML = ''
}
buscarElemento()