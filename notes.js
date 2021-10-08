const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return "Notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('The note has been added.')
    } else {
        console.log('The note title is a duplicate; the note has not been added.')
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const newNotes = notes.filter((note) => {
        return note.title !== title
    })
    
    if (notes.length !== newNotes.length) {
        console.log(chalk.blue.inverse.bold('Note successfully removed.'))
        saveNotes(newNotes)
    } else {
        console.log(chalk.magentaBright.inverse.bold('Error: note not found.'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

module.exports = {
    getNotes: getNotes(),
    addNote: addNote,
    removeNote: removeNote
}