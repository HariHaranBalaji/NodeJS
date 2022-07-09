const fs=require('fs')
const chalk=require('chalk')

const getNotes=()=>{
    return 'Your Notes......'
}

const addNote=(title,body)=>{
    const notes=loadNotes()
    // const duplicatenotes=notes.filter((note)=> note.title===title)
    const duplicatenote=notes.find((note)=> note.title===title)
    

    // const duplicatenotes=notes.filter(function(note){
    //     return note.title===title
    // })

    // debugger
    
    // if(duplicatenotes.length === 0){
    if(!duplicatenote){
        notes.push({
            title: title,
            body: body
        })
    
    // console.log(notes)
    saveNotes(notes)
    console.log(chalk.green.inverse('Notes added'))
    }
    else{
        console.log(chalk.red.inverse('Notes not added'))
    }
}

const saveNotes=(notes) =>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)

}
const loadNotes=()=>{

    try{
    const databuffer=fs.readFileSync('notes.json')
    const dataobj=databuffer.toString();
    return JSON.parse(dataobj)
    }
    catch(e){
        return []
    }
}
const removeNote=(title)=>{
    
    const rmdata=loadNotes()
    const duplrmdata=rmdata.filter((remdata)=>remdata.title !== title)

    // const duplrmdata=rmdata.filter(function(remdata){
    //     return remdata.title!=title
    // })
    
    if(duplrmdata.length <rmdata.length){
        console.log(chalk.green.inverse('Note Removed!'))   
        saveNotes(duplrmdata);
    }
    else{
        console.log(chalk.red.inverse("No Note removed"))
        
    }
    // console.log(title);
    

}
const listnotes=()=>{
    console.log(chalk.blue.inverse('Your Notes'))
    const listdata=loadNotes()
    listdata.forEach(lsdata => {   
       console.log(lsdata.title)      
   })

}
const readnotes=(title)=>{
    const notes=loadNotes()
    const findnote=notes.find((findtitle)=>(findtitle.title===title))
    if(findnote===undefined){
        console.log(chalk.red('-----------No note found-----------'))  
    }
        else{
        
        console.log(chalk.inverse('-----------We found note-----------'))
        console.log(chalk.yellow(findnote.title))
        console.log(findnote.body)

    }

}
module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listnotes:listnotes,
    readnotes:readnotes
}