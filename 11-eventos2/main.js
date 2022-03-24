const saludoText = document.getElementById('saludo')
const contadorSpan = document.getElementById('contador')
const imgBobEsponja = document.getElementById('imgBobEsponja')
const emaiInput = document.getElementById('email')
const barra = document.getElementById('barra')
let contador = 0


const saludar = (e) => {
    console.log(e);
    const nombre = prompt('ingresa tu nombre')
    saludoText.innerText = `Hola ${nombre}`
}

const aumentarContador = () => {
    {
        contador++
        contadorSpan.innerText = contador
    }
}

const entroImagen = (e) => {
    console.log('Entreo a imagen');
    imgBobEsponja.classList.add('animate__animated', 'animate__bounce', 'animate__infinte')
}

const salioImagen = (e) => {
    console.log('Salio imagen ');
    imgBobEsponja.classList.remove('animate__animated', 'animate__bounce', 'animate__infinte')
}

const valorEmail = (e) => {
    console.log(emaiInput.value);
}
let contadorBarra = 0

const cambiarValorBarra = (e) => {
    console.log(e);
    if (e.code === 'Arrowup') {
        contadorBarra = contadorBarra + 10
    } else {

    }
    barra.style.width = '10%'
    console.log(barra.style);
}