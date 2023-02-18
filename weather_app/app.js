const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")



const location = process.argv[2] 
console.log(location) 

if (location){
        geocode(location, (error, {latitude, longitude})  => {
            // console.log(error) 
            // console.log(response) 
            if (error){
                console.log(error) 
                return 
            }
            else {
                
                // const latitude = response.latitude 
                // const longitude = response.longitude 
                forecast(latitude, longitude,(error,{location,desc, temperature_actual,temperature_apparent}) => {
                   
                    if (error){
                        console.log(error) 
                        return 
                    }
                    else {
                        console.log(location) 
                        console.group(desc) 
                        console.log("Actual temperature: " ,temperature_actual) 
                        console.log("Apparent temperature: ", temperature_apparent) 
                    }   
                
                })
        }
        })
} 
else {
    console.log("Please provide an address")
}





