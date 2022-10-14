const axios = require('axios');
const needle = require('needle');

let endpoint = 'https://pokeapi.co/api/v2/type'


const f = async () =>{
    try {
       let response = await needle ('get', endpoint)
       response.body.results.forEach(tipos => {
        console.log(`tipo: ${tipos.name}`)
        console.log('--------------------')
        });
    } catch (error) {
        console.error(error)
    }
}

f()
