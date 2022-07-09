var request=require('request')
const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=83c702103f5535acff555b5bd1aafe57&query='+latitude+','+longitude+'&units=f'

    // 37.8267,-122.4233
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Lowlevel error',undefined)
        }
        else if(body.error){
            callback('Coordinate Error',undefined)
        }
        else{ 
            // const{temperature:temperature,feelslike:feelslike,weather_descriptions:descripition}=response.body.current
               const temperature=body.current.temperature
               const feelslike=body.current.feelslike
               const descripition=body.current.weather_descriptions        
            callback(undefined,descripition+'. It is currently '+temperature+' degrees out. Is feels like '+feelslike+' degrees out.')
        }
    })

}
module.exports=forecast
