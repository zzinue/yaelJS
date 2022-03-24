// Referencia al Body
const body = document.querySelector('body');

//Creación de Div para card
const contenedorCard = document.createElement('div');

contenedorCard.classList.add('card');

//Agrego el div de card al body
body.append(contenedorCard);

const imagenCard = document.createElement('img');
imagenCard.classList.add('card-img-top');
imagenCard.src = 'https://i.blogs.es/942f78/spider-man-3-tom-holland_8m76/1366_2000.jpeg';
contenedorCard.append(imagenCard);

const cardBody = document.createElement('div');
cardBody.classList.add('card-body');
contenedorCard.append(cardBody);

const titleCard = document.createElement('h5');
titleCard.classList.add('card-title');
titleCard.innerText = 'Spider-man No Way Home';
cardBody.append(titleCard);

const parrafoCard = document.createElement('p');
parrafoCard.classList.add('card-text');
parrafoCard.innerText = 'Es la mejor película porque tiene a Tobey God';
cardBody.append(parrafoCard);

const linkCard = document.createElement('a');
linkCard.classList.add('btn', 'btn-primary');
linkCard.innerText = 'Hola';
linkCard.href = 'https://www.marca.com/claro-mx/trending/2021/11/17/61947c94ca4741b4728b4665.html';
cardBody.append(linkCard);