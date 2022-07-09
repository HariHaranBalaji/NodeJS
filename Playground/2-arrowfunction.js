// const square=function(x){
//     return x*x
// }
// const square=(x) =>{
//     return x*x
// }
const square = (x) => x*x
const event={
    name:'Wayne',
    guestlist:['hari','kavs','bala','chan']
    ,
   printlist(){
       console.log("the party"+this.name)
       this.guestlist.forEach((guest)=>{
           console.log(guest+'  attending '+this.name)
       })

    }
}
event.printlist();
console.log(event.name)