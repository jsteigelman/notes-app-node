const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return "Notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((notes) => notes.title === title)

    if (duplicateNote === undefined) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.blue.inverse.bold('Note successfully added.'))
    } else {
        console.log(chalk.magentaBright.inverse.bold('The note title is a duplicate; the note has not been added.'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const newNotes = notes.filter((note) => note.title !== title)
    
    if (notes.length !== newNotes.length) {
        console.log(chalk.blue.inverse.bold('Note successfully removed.'))
        saveNotes(newNotes)
    } else {
        console.log(chalk.magentaBright.inverse.bold('Error: note not found.'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green.inverse.bold('Notes List:'))
    notes.forEach((note) => {
        console.log(note.title)
    })
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
    removeNote: removeNote,
    listNotes: listNotes
}