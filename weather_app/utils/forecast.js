const request = require("request") 
const KEY = "46eb277217d57602048582a3fc690957"
// 46eb277217d57602048582a3fc690957
// http response object is returned, of which the body attribute is json type, by setting paramter json true, we can get parsed body
const latitude = 45 ; const longitude = 45 ; 

const url = "http://api.weatherstack.com/current?access_key=" + KEY + "&query=" + latitude + "," + longitude + "&units=f" 
const forecast = (latitude , longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=" + KEY + "&query=" + latitude + "," + longitude + "&units=f" 
    console.log(url)
        
        request({
            url , 
            json: true   
        }, 
        (error,{body}) => {
            if (error){callback("weather services down", undefined)}
            else if (body.success === false){
                callback("try a different location", undefined) 
            }
            else{
                const {temperature: temperature_actual,feelslike: temperature_apparent,weather_descriptions:desc} = body.current
                callback(undefined, {location: body.location.name, 
                                     temperature_actual, 
                                     temperature_apparent,
                                      desc: desc[0]
                                    }                   
                        )
            }
        })   
}

module.exports = forecast 


// request({
//     url, 
//     json : false
// }, 
// (error, response) => {

//     console.log(response) 


// })


// {
//     if (error) {
//         console.log(error)
//     }
//     else{
//         const url = "http://api.weatherstack.com/current?access_key=46eb277217d57602048582a3fc690957&query=" + toString(response.latitude) + 
//                         toString(response.longitude) + "&units=f" 
        
//         request({
//             url : url , 
//             json: true  
//         }, 
//         (error,response) => {
//             if (error){console.log("weather services down")}
//             else if (response.body.sucess === "failure"){
//                 console.log("try a different location")
//             }
//             else{
//                 const temp_actual = response.body.current.temperature
//                 const temp_apparant = response.body.current.feelslike 
//                 console.log(`${data.weather_descriptions[0]} .The temperature is ${temp_actual} although it feels like ${temp_apparant}`)
//             }
//         })
//     }
// }