let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint = 'https://pokeapi.co/api/v2/type'

function exito(response){
    console.log(JSON.parse(response))
}
function fallo(status){
    console.log(status)
}
const  get_data = (endpoint,exito, fallo) => {
    //Conexión API
    let http = new XMLHttpRequest()
    //Abrir conexión a ala API
    http.open('get', endpoint )
    //Enviar la solicitud(Request)
    http.send()
    //Hacer el tratamiento de la response
    http.onload = function(){
         if(http.status === 200 ){
            exito(http.responseText)
         }else{
            fallo(http.status)
         }     
    }
}
//envocar la función
 get_data(endpoint , exito, fallo)