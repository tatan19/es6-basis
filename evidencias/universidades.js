const axios = require('axios')

let config = {
    method: 'get',
    url: 'https://restcountries.com/v3.1/all'
}

const f = async () =>{
    try {
       let response = await axios (config)
       response.data.forEach(pais => {
        console.log(`tipo: ${pais.name.common}`)
        console.log('*******************')
        });
    } catch (error) {
        console.error(error)
    }
}

f()
