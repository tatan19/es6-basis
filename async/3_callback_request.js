const request = require ('request')

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint = 'https://pokeapi.co/api/v2/type'

const r = request(endpoint, { json: true}, function(err, response, data){
    data.results.forEach(element => {
        console.log('*****************')
        console.log(`tipo: ${element.name}`)
        console.log(`tipo: ${element.url}`)
        
    });
})