//Importar common js
import {sumar,restar,multiplicar,dividir} from './operaciones.js'

const a = 10;

const b = 30;

//manera legada de tomar funciones 
//escribir funciones

// function sumar(a, b) {
//    console.log (`La suma es ${a + b}`)
// }
// sumar(a , b);

//manera con identificador
//  const  sumar = function (a, b) {
//         console.log (`La suma es ${a + b}`)
//  }
// sumar(a , b);
 
//manera flecha

// console.log (`La suma es ${a + b}`)
 
console.log (`La suma es ${dividir(a , b)}`);
