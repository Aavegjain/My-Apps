const request = require("request") 
const KEY = ""


const geocode = (location, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + location + ".json?" + KEY  
    console.log("url for geolocate is" + url)
    request({
        url , 
        json : true
    }, 
    (error, {body}) => {
        if (error){
            callback("geolocation services down", undefined)
        }
        else if (body.features.length === 0){
            callback("try a different location", response)
        }
        else { 
            const latitude = body.features[0].center[1] 
            const longitude = body.features[0].center[0] 
            callback(undefined , {latitude , longitude})
        } 
    }) 
}

module.exports = geocode 
