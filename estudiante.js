let colors = require('colors');


const g1 = ["Laura",
    "Carlos",
    " Ana",
    " Jorge"
]

const g2 = [
    "Enrique",
    "Jairo",
    "Valeria"
]

const g3 = [
    ...g1,
    "Diana",
    ...g2,
    "Duvan"
]

const estudiante = {
    id: 1,
    nombre: 'Sebastian',
    Apellido: 'Morales',
    Identificación: 1097332155,
    Amigos:  g3
}

//desesctructurar elarreglo de estudiantes

console.log(estudiante)

//desestructurar el estudiante
// let {nombre, Apellido, Identificación} = estudiante


// console.log(nombre.red)
// console.log(Apellido.bgBlue)
// console.log(Identificación)
