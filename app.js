const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            type: 'string',
            demandOption: true
        },
        body: {
            describe: 'Note body',
            type: 'string',
            demandOption: true
        }
    },
    handler(argv){
        notes.addNotes(argv.title, argv.body)
    }

})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    type: 'string',
    handler(argv){
        notes.removeNote(argv.title)
    }

})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            type: 'string',
            demandOption: true
        } 
    },
    handler(argv){
        notes.readNote(argv.title)
    }

})

//create list command

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler(){
        notes.listNotes()
    }
})

yargs.parse()





