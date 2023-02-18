// const utils = require("./utils.js") 
const fs = require("fs") 
const notes = require("./notes.js")
const validator = require("validator") 
const chalk = require("chalk") 
const yargs = require("yargs") 


const reader = () => {
    console.log("reading notes through yargs") 
}
// yargs.version("1.0.1")

//registering command 'add' 
yargs.command({
    'command' : "add" , 
    "builder" : {
        "title": { 
            describe : "title for your notes",
            demandOption: true ,
            type: "string"
        }, 
        "body" : {
            describe: "body of the notes",
            demandOption:true, 
            type: "string" 
         }
    }, 
    'description' : "add some notes" , 
    handler(argv){
        const title = notes.addNotes(argv.title,argv.body) 
        if (title === null) console.log(chalk.red.inverse(`${argv.title} taken already`))
        else console.log(chalk.green.inverse("note added successfully"))
    }
})

//registering command remove
yargs.command({
    command: "remove", 
    description: "used to remove notes given their title",
    handler(argv){
        const title = notes.removeNotes(argv.title) 
        if (title === null) console.log(chalk.red.bold(`${argv.title} not present in notes`)) 
        else console.log(chalk.green.bold(`${argv.title} removed`)) 
    }, 
    builder: {
        title: {
            type:'string',
            demandOption:true,
            describe:"title of the note to be removed"
        }
    }
})



//registering command 'list' 
yargs.command({
    'command' : "list" , 
    'description' : "list your notes" , 
    handler(argv){ notes.listNotes() }
})

//registering command 'read' 
yargs.command({
    'command' : "read" , 
    'description' : "read notes" , 
    handler(argv){notes.readNotes(argv.title)},
    "builder" : {
        title:{
            describe : "title of note to be read", 
            demandOption: true,
            type: 'string'
        }
    }
})




// console.log(process.argv) 
// console.log(yargs.argv) - used for parsing argv ; other method below
yargs.parse() ; 






