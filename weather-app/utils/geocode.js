var request=require('request')
const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?&access_token=pk.eyJ1IjoiYmFsYWppaGFyaWhhcmFuIiwiYSI6ImNsNWIyZ3FiNTAzbnkzY211Zm14cDI4MDEifQ.AzYnio8MXnZAKTv-SVdi1Q&limit=1'
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to server',undefined)
        }
        else if(body.features.length === 0){
            callback('Unable to find data',undefined)
        }
        else{
           
            loc={
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            }
            callback(undefined,loc)
        }

    })
}
module.exports=geocode