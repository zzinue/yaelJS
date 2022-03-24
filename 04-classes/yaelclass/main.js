import Carro from './Carro.js';

/* const carro1 = new Carro(); */
const carro2 = new Carro('Negro', 'Chiron', 'Bugatti', '123-RGY', 'Arnold', 'Nuevo');

// carro1.encender();
// carro2.encender();
/* console.log(carro1.encender()); */

carro1.iniciarGrabacion();
carro2.iniciarGrabacion();

carro1.acelerar(50);
carro2.acelerar(300);