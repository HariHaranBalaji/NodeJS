// console.log('starting')

// setTimeout(function(){
//     console.log('2 second timer')
// },2000)

// setTimeout(function(){
//     console.log('0 second timer')
// },0)

// console.log('stoping')
// var request=require('request')
// var url='http://api.weatherstack.com/current?access_key=83c702103f5535acff555b5bd1aafe57&query=37.8267,-122.4233&units=f'
// // query=37.8267,-122.4233

// request({url:url,json:true},function(error,response){
//     // const data=JSON.parse(response.body)
//     // console.log(data.current);
//     if(error){
//         console.log('Unable to connect to the server')
//     }
//     else if(response.body.error){
//         console.log('unable to find location')
//     }
//     else{
//         const temperature=response.body.current.temperature
//         const feelslike=response.body.current.feelslike
//         // console.log(response.body.current);
//         console.log(response.body.current.weather_descriptions+'. It is currently '+temperature+' degrees out. Is feels like '+feelslike+' degrees out.')

//     }
    
// })

// var locationurl='https://api.mapbox.com/geocoding/v5/mapbox.places/chester.json?&access_token=pk.eyJ1IjoiYmFsYWppaGFyaWhhcmFuIiwiYSI6ImNsNWIyZ3FiNTAzbnkzY211Zm14cDI4MDEifQ.AzYnio8MXnZAKTv-SVdi1Q&limit=1'
// // Los?20Angeles  proximity=-74.70850,40.78375
// // 'https://api.mapbox.com/geocoding/v5/mapbox.places/chester.json?&access_token=pk.eyJ1IjoiYmFsYWppaGFyaWhhcmFuIiwiYSI6ImNsNWIyZ3FiNTAzbnkzY211Zm14cDI4MDEifQ.AzYnio8MXnZAKTv-SVdi1Q&limit=1'
// request({url:locationurl,json:true},(error,response)=>{
//     if(error){
//         console.log('Unable to connect to server')
//     }
//     else if(response.body.features.length === 0){
//         console.log('Unable to find data')
//     }
//     else{
//         const latitude=response.body.features[0].center[1]
//         const longitude=response.body.features[0].center[0]
//         console.log('longitude:: '+longitude+ " latitude:: "+latitude)
//     }    
// })

// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

//--------------------This helps to get input without quotes (i.e)two or more words
// const cmdinput=process.argv
// const size=cmdinput.length
// const searchdata=(cmdinput.slice(2,size)).toString();
// geocode(searchdata,(error,data)=>{
//-----------------------------------------------------------------------------------------


const address=process.argv[2]

if(!address){
    console.log("Please provide address")
}
else{
    geocode(address,(error,{latitude,longitude,location})=>{
        // geocode(address,(error,data)=>{
        
        if(error){
            return console.log('Error',error)
        }
        // const {latitude,longitude,location}=data
        
        forecast(latitude, longitude,(error,forecastdata)=>{
            if (error){
                return console.log('Error',error)
            }
            console.log(location)
            console.log(forecastdata)  
        })
    })

}



// console.log(searchdata)
