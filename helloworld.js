const fs = require("fs") 

fs.writeFileSync("notes.txt", "learning about file systems. ") 
fs.writeFileSync("notes.txt", "learning some more") 

fs.appendFileSync("notes.txt", " appending data") 