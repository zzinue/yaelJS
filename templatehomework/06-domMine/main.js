//superheroes:

const superHeores = [{
        name: 'Spider-Man (Peter Parker)',
        girlfirend: 'Mary Jane',
        powers: 'superhuman recuperative abilities',
        city: 'New York',
        villians: 'Octopus'
    },
    {
        name: 'Captain America',
        girlfriends: '',
        powers: 'super strength',
        city: 'New York',
        villians: 'Crossbones'


    },
    {
        name: 'Batman',
        girlfirend: 'Batgirl',
        powers: 'sueper rich',
        city: 'Gotham',
        villians: 'Penguin'
    },


]

/* console.log(superHeores) */
const body = document.querySelector('body')
console.log(body)

const contenedorLista = document.createElement('ol')
contenedorLista.classList.add('list-group', 'list-group-numbered')
body.append(contenedorLista)

superHeores.forEach((superheroe) => {
    const contenedorElemento = document.createElement('li')
    contenedorElemento.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start')

    const informacionHeroe = document.createElement('div')
    informacionHeroe.classList.add('ms-2', 'me-auto')

    contenedorElemento.append(informacionHeroe)
    console.log(contenedorElemento)

    const alias = document.createElement('div')
    alias.classList.add('fw-bold')
    alias.innerHTML = superheroe.name
    informacionHeroe.append(alias)
    informacionHeroe.append(superheroe.city)
    contenedorLista.append(contenedorElemento)

    const villan = document.createElement('span')
    villan.classList.add('badge', 'bg-primary', 'rounded-pill')
    villan.innerText = superheroe.villians
    contenedorElemento.append(villan)

})