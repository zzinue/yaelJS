const queryParams = new URLSearchParams(window.location.search)
const id = queryParams.get('id')

const containerCards = document.querySelector('.row')

const apiUrl = 'https://api.themoviedb.org/3'
const apiKey = 'e544f0d1361e9e8af242fe99dec75cbf'
const urlPoster = 'https://image.tmdb.org/t/p/original'


//datos de pelicula card detalles

const recuperarPelicula = () => {
        //url de detalles de pelicula
        const url = `${apiUrl}/movie/${id}?api_key=${apiKey}&language=en-US`
        console.log(url);

        //funcion para mandar a llamar los datos
        fetch(url)
            .then(respuesta => respuesta.json())
            .then((body) => {
                const peliculas = body.results
                    //elemento para agregar al container y la funcion que crear la card
                containerCards.insertAdjacentHTML('beforeend', createCard(body))

            })
    }
    //funcion para crear la card de los detalles con boostrap
const createCard = (body) => {
    return `
    <div class="card mb-3">
  <img src="${urlPoster}${body.backdrop_path}" class="card-img-top" alt="">
  <div class="card-body">
  </div>
</div>

<div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${urlPoster}${body.backdrop_path}" class="img-fluid rounded-start" alt="">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${body.original_title}</h5>
        <p class="card-text">${body.overview}</p>
        
      </div>
    </div>
  </div>
</div>`
}
recuperarPelicula()

//datos para los creditos

const recuperarCreditos = () => {
    //url de detalles de pelicula
    const urlCreditos = `${apiUrl}/movie/${id}/credits?api_key=${apiKey}&language=en-US`
    console.log(urlCreditos);

    //funcion para mandar a llamar los datos de los creditos
    fetch(urlCreditos)
        .then(respuesta => respuesta.json())
        .then((body) => {
            const creditos = body.results
            let actores = body.cast.slice(0, 6);
            actores.forEach(actor => {
                //console.log(actor);
                containerCards.insertAdjacentHTML('beforeend', createCardCreditos(actor))
            })


            //elemento para agregar al container y la funcion que crear la card


        })
}
const createCardCreditos = (actor) => {
    return `
<div class="card col-sm-4" style="width: 17rem;">
  <img src="${urlPoster}${actor.profile_path}" class="card-img-top" alt="">
  <div class="card-body">
    <h3>${actor.original_name}</h3>
  </div>
</div>`
}
recuperarCreditos()