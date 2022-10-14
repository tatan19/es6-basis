const axios = require('axios')

let config = {
    method: 'get',
    url: 'https://animechan.vercel.app/api/quotes/anime?title=naruto'
}

const f = async () =>{
    try {
       let response = await axios (config)
       response.data.forEach(element =>{
        console.log(`tipo: ${element.anime}`)
        console.log('*******************')
       })
    } catch (error) {
        console.error(error)
    }
}

f()