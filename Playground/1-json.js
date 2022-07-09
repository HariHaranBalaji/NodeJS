const fs=require('fs')

// const book={
//     title:'Attitude is everything',
//     author:'Wayne'
// }
// var bookJson=JSON.stringify(book);
// fs.writeFileSync('1-json.json',bookJson);
// -------------------------------------------

// const databuffer=fs.readFileSync('1-json.json')
// const datajson=databuffer.toString()
// // console.log(JSON.parse(datajson))
// var dataobj=JSON.parse(datajson)
// console.log(dataobj.title)
const databuffer=fs.readFileSync('1-json.json')
const data=databuffer.toString()
const dataobj=JSON.parse(data)

dataobj.name='Hari'
dataobj.planet='Mars'
dataobj.age=22

console.log(dataobj)
const Jsondata=JSON.stringify(dataobj)
fs.writeFileSync('1-json.json',Jsondata)