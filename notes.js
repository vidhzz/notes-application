const fs = require('fs')
const chalk = require('chalk')


const addNotes = (title, body) => {

    const notes = loadNotes()

   
    const duplicateNote = notes.find((note) => note.title === title )
    
    if(!duplicateNote){
        notes.push(
            {
                title: title,
                body: body
            }
        )
        
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    }else{
        console.log(chalk.red.inverse('Note title already exists!'))
    }

    

}

const saveNotes = (notes) => {
    const dataJSON =  JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

   
}


const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

//removing a note 
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title
    )

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Notes removed!'))
    }else{
        console.log(chalk.red.inverse('No note found!'))
    }

    saveNotes(notesToKeep)
}

const listNotes = () => {

    const notes = loadNotes()
    console.log(chalk.inverse('Your notes...'))
    notes.forEach((note) => console.log(note.title))

}

const readNote = (title) => {

    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(chalk.inverse(note.title) + " : " + note.body)
        
    }else{
        console.log(chalk.red.inverse('No note found!'))
    }
}

module.exports = {
    
    addNotes : addNotes,
    removeNote : removeNote,
    listNotes: listNotes,
    readNote: readNote
}