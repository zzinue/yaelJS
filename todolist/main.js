const dataTareas = document.getElementById('dataRegistrar')

const registrarTarea = (e) => {
    e.preventDefault()
    const inputRegistrarHtml = e.target.querySelectorAll('input')
    const inputRegistar = Array.from(inputRegistrarHtml)
    const valorRegistar = inputRegistar.map((input) => {
        console.log(input.value)
    })
}
let tareas = [{
    tarea: '',
    estado: ''
}]

const guardarTarea = (e) => {
    e.preventDefault()
    const inputsHtml = e.target.querySelectorAll('input')
    const inputs = Array.from(inputsHtml)
    let tarea = {}
    inputs.forEach((input) => {
        tarea[input.name] = input.value
    })
    console.log(tarea);
    tareas.push(tarea)
    const row = crearRow(tareas.length, tarea)
    dataRegistrar.append(row)

}
const crearRow = (index, tarea) => {
    const tr = document.createElement('tr')
    const th = document.createElement('th')
    th.innerText = index
    const tdTarea = document.createElement('td')

    tdTarea.innerText = tarea.tarea
    tr.append(th)
    tr.append(tdTarea)
    return tr
}

tareas.forEach((tarea) => {
    const row = crearRow(tareas.length, tarea)
    dataRegistrar.append(row)
})


/* const inputTarea = document.getElementById("registroTarea").value;

const getTarea = () => {
    console.log(inputTarea);
}


const setTarea = () => {
    const tarea = ` 
                    <div>
                        
                    </div>
                    <div>
                    
                    </div>
                `;

} */