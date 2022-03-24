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
        Villians: 'Crossbones'


    },
    {
        name: 'Batman',
        girlfirend: 'Batgirl',
        powers: 'sueper rich',
        city: 'Gotham',
        villians: 'Penguin'
    },
    {
        name: 'Deadpool',
        girlfirend: 'Vanessa',
        powers: 'Hysterical strength',
        city: 'New York',
        villians: 'T-Ray'
    },
    {
        name: 'Venom',
        girlfirend: 'Anne Weying',
        powers: 'Healing factor',
        city: 'New York',
        villians: 'Carnage'
    },

]
const json = JSON.stringify(superHeores)
console.log(json)