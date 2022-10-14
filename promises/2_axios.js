const axios = require('axios')

let config = {
    method: 'get',
    url: 'https://pokeapi.co/api/v2/type'
}

axios(config)
    .then((response) => {
        return response.data.results
    })

    .then((data) => {
        data.forEach(tipos => {
            console.log(`tipo: ${tipos.name}`)
            console.log('*******************')
        });
    })

    .catch((error) => {
        console.log(error)
    })