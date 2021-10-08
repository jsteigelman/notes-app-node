const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// customize yargs version
yargs.version('1.1.0')

// create add note command
yargs.command({
    command: 'add',
    describe: 'Add note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// create remove note command
yargs.command({
    command: 'remove',
    describe: 'Remove note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// create read note command
yargs.command({
    command: 'read',
    describe: 'Read note',
    handler() {
        console.log('Reading note')
    }
})

// create list note command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler() {
        console.log('Listing notes')
    }
})

yargs.parse()