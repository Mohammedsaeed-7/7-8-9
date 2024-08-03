const async = require("hbs/lib/async")

let form = document.getElementById("form1")

// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     console.log(document.getElementById("address").value)
// })

form.addEventListener('submit',(e)=>{
    e.preventDefault()
   // console.log(document.getElementById("address").value)
    weatherFunction()
    form.reset()
})

const errorf = document.getElementById('error')
const locationf = document.getElementById('location')
const forecast = document.getElementById('forcast')

let weatherFunction = async()=>{
    try{
        const address = document.getElementById('address').value
        const res = await fetch(`https://localhost:3000/weather?address=`+ address)
        const data = await res.json()
        console.log(data)
        if(data.error){
            errorf.textContent = data.error
            locationf.innerHTML=" "
            forecast.innerText =" "
        }
        else{
            locationf.innerText = data.location
            forecast.innerText = data.forecast
        }
    }
    catch(e){
        console.log(e)
    }
}

