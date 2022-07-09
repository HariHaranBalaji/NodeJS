//  var fs=require('fs')
//  fs.appendFileSync('notes.txt','My Name is Hariharan By AppendFileSync')
// const validator=require('validator')

const chalk=require('chalk')

var notes=require('./notes.js')
// var msg=getnotes();
// console.log(msg);
// console.log(chalk.red.bold('Success!'))
// console.log(chalk.blue.inverse('Success!'))
// console.log(process.argv)

// console.log(validator.isEmail('Haran0040@gmail.com'))
// console.log(validator.isURL('https://Haran0040.com'))

const yargs=require('yargs')
yargs.command({
    command: 'add',
    describe:'Add a note',
    builder:{
        title:{
            describe:'Note Tile',
            type:'String',
            demandOption:true
        },
        body:{
            describe:'Body of the notes',
            demandOption:true,
            type:'String'
        }
    },
    handler(argv){

        notes.addNote(argv.title,argv.body)
    }

        // console.log('Title :: '+argv.title)

        // console.log('Title :: '+argv.body)    }
})
yargs.command({
    command: 'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note Tile',
            type:'String',
            demandOption:true
        }
    },
    handler(argv){
        // console.log('Removing the note')
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe:'List of note',
    handler(){
        notes.listnotes()
        
    }
})
yargs.command({
    command: 'read',
    describe:'Read a note',
    builder:{
        title:{
            type:'String',
            demandOption:true,
            describe:'Your Title'

        }
    },
    handler(argv){
        // console.log('Read the note')
        notes.readnotes(argv.title)
    }
})
// console.log(yargs.argv);
yargs.parse()