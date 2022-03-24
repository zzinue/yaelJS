const heroes = [
    {
        nombre:'Peter Parker',
        nombreSuperheroe:'Spider-man',
        editorial:'Marvel',
        anioAparacion:1962
    },
    {
        nombre:'Billy Batson',
        nombreSuperheroe:'Shazam',
        editorial:'Dc',
        anioAparacion:1972
    },
    {
        nombre:'Chespirito',
        nombreSuperheroe:'Chapulin Colorado',
        editorial:'Televisa',
        anioAparacion:1973
    },
    {
        nombre:'Bruce Wayne',
        nombreSuperheroe:'Batman',
        editorial:'Dc',
        anioAparacion:1939
    }
];

const body = document.querySelector('body');

const contenedorLista = document.createElement('ol');
contenedorLista.classList.add('list-group','list-group-numbered');

body.append(contenedorLista);


heroes.forEach((heroe)=>{
    const contenedorElemento = document.createElement('li');
    contenedorElemento.classList.add('list-group-item','d-flex','justify-content-between','align-items-start');

    const informacionHeroe = document.createElement('div');
    informacionHeroe.classList.add('ms-2','me-auto');
    contenedorElemento.append(informacionHeroe);
    
    const alias = document.createElement('div');
    alias.classList.add('fw-bold');
    alias.innerText = heroe.nombreSuperheroe;
    informacionHeroe.append(alias);
    informacionHeroe.append(heroe.nombre);


    const anioAparacion = document.createElement('span');
    anioAparacion.classList.add('badge','bg-primary','rounded-pill');
    anioAparacion.innerText = heroe.anioAparacion;

    contenedorElemento.append(anioAparacion);


    contenedorLista.append(contenedorElemento);
});