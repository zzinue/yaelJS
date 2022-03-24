const students = (nombre, apellido, carrera, matricula, promedio) => {
    return {
        nombre,
        apellido,
        carrera,
        matricula,
        promedio,
    }

}

const students2 = students(prompt('cual es tu nommbre'), prompt('apellido'), prompt('carrera'), prompt('matricula'), prompt('promedio'))

console.log(students2)
let conf = confirm('desea agregar otro alumno?')
if (conf == true) {
    students2 = students(prompt('cual es tu nommbre'), prompt('apellido'), prompt('carrera'), prompt('matricula'), prompt('promedio'))

} else alert('ok')

/* confirm('Deseas agregar otra categoria')
do {
    const students2 = students(prompt('cual es tu nommbre'), prompt('apellido'), prompt('carrera'), prompt('matricula'), prompt('promedio'))

} while (!confirm('Deseas agregar otra categoria'))*/