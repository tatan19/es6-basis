let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const endpoint = 'https://urlhaus-api.abuse.ch/v1/urls/recent/limit/10'

const exito = (response) => {

    console.log(JSON.parse(response).urls.forEach(element => {
        console.log(element.id)
        console.log('----------')
    }))
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

