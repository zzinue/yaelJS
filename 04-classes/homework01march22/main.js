//tarea del lunes para el martes 1 de marzo

import Heroe from './Heroe.js'
const heroe1 = new Heroe('Spiderman', 'Mary jane', 'superhuman healing', 'New York', 'Octopus')
console.log(heroe1.toJson())
console.log(heroe1.toliteralObject1());

const heroe2 = new Heroe('Batman', 'Batgirl', 'super rich', 'Gotham', 'Penguin')
console.log(heroe2.throw())

const heroe3 = new Heroe('Venom', 'Anne weying', 'Healing factor', 'New York', 'Carnage')
console.log(heroe3.toJson())
console.log(heroe3.toliteralObject1());

heroe1.throw()
heroe1.Phrase()

heroe1.fight(40)
heroe3.fight(20)

heroe3.healing()
heroe2.healing()
heroe1.healing()
heroe2.protectingCity()
heroe3.protectingCity()