import Car from './Car.js'
const car1 = new Car('rojo', 'model3', 'tesla', '123-fgy', 'gaby', 'nuevo')
console.log(car1.toJson())
const car2 = new Car('Negro', 'chiron', 'bugatti', '123fg-y0', 'arnold', 'nuevo')
console.log(car2.encender())

car1.iniciarGrabacion()
car2.iniciarGrabacion()
car1.acelerar(50)
car2.acelerar(300)
console.log(car1.toObjetoliteral())