const express = require("express") // only a single function 
const path = require("path")
// require and __filename etc are defined in the main fumction encloising our script 
const chalk = require("chalk")
const app = express() 

// console.log("dirname is " + __dirname + "filename is " + __filename)
const public_path = path.join(__dirname, "../public") 

const obj = {
    name : "Aaveg" , 
    argv : ["in1", "in2", "in3"]
}
// routing 

app.use(express.static(public_path)) 

app.get('/weather', (req,res) => {
    res.send(obj)
})


// listening 
app.listen(3000, () => {
    console.log(chalk.green.inverse("listening at port 3000"))
}) 

