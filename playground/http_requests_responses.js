const https = require("http") 
const KEY = "46eb277217d57602048582a3fc690957"
latitude = 40 
longitude = -7
const url = "http://api.weatherstack.com/current?access_key=" + KEY + "&query="   + "&units=f" 

const request = https.request(url , (response) => {
        let data = '' 

        response.on('data', (chunk) => {
            console.log(chunk) 
            console.log("chunk received") 
            data += chunk.toString()  
            console.log(data) 
        })

        response.on('end', () => {
            const parsed = JSON.parse(data) 
            console.log(parsed) 
        })
})

request.on('error', (error) => {
    console.log(error) 
})

request.end () 