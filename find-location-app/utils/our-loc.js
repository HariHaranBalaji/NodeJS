const request=require('request')
const ourLoc=(ip,callback)=>{

    const loc='https://ipinfo.io/'+ip+'/geo'
    request({url:loc,json:true},(error,response)=>{
        if (error){
            callback('error',undefined)

        }
        else{
        //  const locdata=JSON.parse(response.body)

        callback(undefined,'Your location ::'+response.body.region+' Org ::'+response.body.org +' hostname ::'+response.body.hostname)
        // console.log('Your location ::'+response.body.region)
        // console.log('Org ::'+response.body.org)
        // console.log('hostname ::'+response.body.hostname)
        // console.log(locdata.org)

        }

    
   


    })
}
module.exports=ourLoc