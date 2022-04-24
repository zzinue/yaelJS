const urlDb = 'https://peliculas-app-8acbd-default-rtdb.firebaseio.com/'

// Función en el cual el último paramentro es un callback siendo una función que se pasa a otra función 
// como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción

const crearPeliculaFavorita = (peliculaId, backdropPath, title, overview, funcion) => {
    //estructurando peticion
    const url = `${urlDb}/favoritos.json`
    const pelicula = { peliculaId, backdropPath, title, overview }

    fetch(url, {
            method: 'POST',
            body: JSON.stringify(pelicula),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((respuesta) => respuesta.json())
        .then((body) => funcion(body))
        .catch((error) => console.log(error))
}


const recuperarFavoritos = (funcion) => {
    const url = `${urlDb}/favoritos.json`
    fetch(url)
        .then((respuesta) => respuesta.json())
        .then((body) => funcion(body))
        .catch((error) => console.log(error))

}