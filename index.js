 import { materias } from "./materias.js "; 
import pkg from 'colors';

//métodos de los objetos arreglo
//foreach: redcorre un arreglo
materias.forEach((materia)=>{

    if(materia.tipo === 'transversal'){
        console.log(`materia: ${materia.nombre}`.magenta)
    console.log(`materia: ${materia.instructor}`.blue)
    }
    
})

//map: construye un arrego con base en otro
const profesores = materias.map((materia)=>{
   return materia.instructor
})

//find: encontrar la primer ocurrenciaelemento)
// que cumpla con el criterio dado

const PHP = materias.find((materia)=>{
    return materia.instructor === "Cristian Buitrago"
})

//push: agrega un elemento a un arreglo
materias.push({
    id: 5,
    nombre: "Diseño front-end",
    instructor: "Adriana duarte",
    tipo: "técnica",
    notas: [
        4.5,
        4.3,
        3
    ]
})

// //splice: delete
// materias.splice(1,2,3,);

const elementIndex = materias.findIndex((obj => obj.id === 1));
materias[elementIndex].nombre = "Sebastian";

console.log(materias)