const request=require('request')

const ourIp=()=>{



request({url:url},(error,data)=>{
    // const ip=JSON.parse(data)
    
   
    // console.log(data)
    if(error){
        console.log('error')
    }
    else{
    const result=JSON.parse(data.body)
    console.log('Your IP ::'+result.ip)
    const loc='https://ipinfo.io/'+result.ip+'/geo'
    }
})
}