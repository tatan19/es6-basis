function llamarAlumno( alumno , callback){
    let llamarAlumno= `LLamando a alumno: ${alumno}`
    //ejecutar funcion callback
    callback(llamarAlumno)
}

//definir funcion callback

function imprimir(texto){
    console.log(texto)
}

//invocar la función principal de llamar alumno
llamarAlumno("Sebastian Morales", imprimir)