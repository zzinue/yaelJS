const body = document.querySelector('body')
const contenedorCard = document.createElement('div')

body.append(contenedorCard)
contenedorCard.classList.add('card')
console.log(contenedorCard.classList)

const imagenCard = document.createElement('img')
imagenCard.classList.add('card-img-top')
imagenCard.src = 'https://scitechdaily.com/images/Spherical-Closed-Universe-Concept-777x699.jpg'

contenedorCard.append(imagenCard)

const cardBody = document.createElement('div')
cardBody.classList.add('card-body')
contenedorCard.append(cardBody)

const titleCard = document.createElement('h5')
titleCard.classList.add('card-title')
titleCard.innerText = 'Universe'
cardBody.append(titleCard)

const parrafoCard = document.createElement('p')
parrafoCard.classList.add('card-text')
parrafoCard.innerText = 'We are made out of stars'
cardBody.append(parrafoCard)


const linkCard = document.createElement('a')
linkCard.classList.add('btn', 'btn-primary')
linkCard.innerText = 'Go'
linkCard.href = 'https://scitechdaily.com/does-outer-space-end-or-does-the-universe-go-on-forever/'
cardBody.append(linkCard)