const request=require('request')
const ourLoc=require('./utils/our-loc')
const url='https://api.ipify.org/?format=json'
// const url='https://api.ipify.org/?format=json'

    request({url},(error,data)=>{
    // const ip=JSON.parse(data)
    
   
    // console.log(data)
        if(error){
            console.log('error')
        }
        else{
            const result=JSON.parse(data.body)
            console.log('Your IP ::'+result.ip)
            // const loc='https://ipinfo.io/'+result.ip+'/geo'
        //     request({url:loc,json:true},(error,response)=>{
        //     if (error){
        //     console.log("error found")

        //     }
        //     else{
        //     //  const locdata=JSON.parse(response.body)
        //     console.log('Your location ::'+response.body.region)
        //     console.log('Org ::'+response.body.org)
        //     console.log('hostname ::'+response.body.hostname)
        //     // console.log(locdata.org)

        //     } 
        // })

        ourLoc(result.ip,(error,data)=>{
           console.log(data)
        })
    }
})

// const loc='https://ipinfo.io/'+result.ip+'/geo'
// const loc='https://ipinfo.io/161.185.160.93/geo'
// request({url:loc,json:true},(error,response)=>{
//     console.log(response.body)
//     // if(data){
//     //     console.log(response.body)
//     // }
//     // else{
//     //     console.log('error')
//     // }

// })