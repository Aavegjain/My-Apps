const { default: chalk } = require("chalk")
const fs = require("fs") 

const msg = "Your notes..."  

getNotes = () => {
    console.log(msg) 
}

addNotes = (title,body) => { 
    const notes = loadNotes()

    // const duplicate = notes.filter((obj) => obj.title === title)
    const duplicate_note = notes.find((obj) => obj.title === title)
    if (duplicate_note) {
        return null 
    }
    else{
    const new_note = {
        title : title , 
        body : body 
    }

    notes.push(new_note) 

    saveNotes(notes) 
    return title
    }   
}

removeNotes = (title) => {
    const notes = loadNotes() 
    const new_notes = notes.filter((obj) =>  !(obj.title === title))
    // console.log("notes - " , notes) 
    // console.log("new notes - ", new_notes)
    if (new_notes.length === notes.length) return null 
    else {
        fs.writeFileSync("notes.json",JSON.stringify(new_notes))
        return title 
    }
}

listNotes = () => {
    const notes = loadNotes() 
    console.log("Your notes...")
    notes.forEach((note) => console.log(note.title))
    return 
}

readNotes = (title) =>{
    const notes = loadNotes() 
    const note = notes.find((note) => note.title === title) 
    console.log(note)
    if (!note){
        console.log(chalk.red.inverse.bold(`note named ${title} does not exist`))
    }
    else{
        console.log(chalk.green.inverse.bold(`Title : ${note.title}`))
        console.log(chalk.green.inverse.bold(`Body : ${note.body}`)) 
    }
} 

saveNotes = (notes) => {
    const data = JSON.stringify(notes) 
    fs.writeFileSync("notes.json", data) 
    return  
}

loadNotes = () => { 
    try{
    const buffer = fs.readFileSync("notes.json") 
    const arr = JSON.parse(buffer.toString()) 
    debugger 
    // console.log(typeof(arr)) 
    // console.log(arr) 
    return arr} 
    catch(e) { 
        return [] 
    } 
}

module.exports = {
    getNotes: getNotes,  
    addNotes : addNotes,
    removeNotes:removeNotes,
    listNotes: listNotes,
    readNotes : readNotes
}
