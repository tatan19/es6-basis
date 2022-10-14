let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const endpoint = 'https://pokeapi.co/api/v2/type'

const exito = (response) => {
    const tipos = JSON.parse(response).results
    tipos.forEach((tipo) => {
        console.log(`tipo: ${tipo.name}`)
        console.log('.....................')
    });
    //  console.log(JSON.parse(response).results)
}
const fallo = (status) => {
    console.log(status)
}
const get_data = (endpoint) => {
    //definir una promesa
    let promise = new Promise((resolve, reject) => {
        //Conexión API
        let http = new XMLHttpRequest()
        //Abrir conexión a ala API
        http.open('get', endpoint)
        //Enviar la solicitud(Request)
        http.send()
        //Hacer el tratamiento de la response
        http.onload = () => {
            if (http.status === 200) {
                resolve(http.responseText)
            } else {
                reject(http.status)
            }
        }

    })

    return promise
}

async function f() {

    try {
        let response = await get_data(endpoint)
        exito(response)
    } catch (error) {
        fallo(error)
    }


}

f()




// //envocar la función get_dat

//     .then((response) => {
//         exito(response)
//     })
//     .catch((status) => {
//         fallo(status)
//     })