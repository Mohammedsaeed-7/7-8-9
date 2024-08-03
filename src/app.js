//express frame  help to blute the application

/*
* create ==> post
* read ==> get
* update ==> patch
* delete ==> delete
*/

const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/about',(req,res)=>{
    res.send("Hello World in about page")
})
app.get('/services',(req,res)=>{
    res.send("Hello World in services page")
})
app.get('/me',(req,res)=>{
    res.send("Hello World in me page")
})

app.get('/page1',(req,res)=>{
    res.send('<h2>ahmed sead</h2> <buttom>send</buttom>')
})

app.get('/page2',(req,res)=>{
    res.send({
        name:"ahmed",
        age:"50",
        city:"cairo"
    })
})
app.get('/page3',(req,res)=>{
    res.send({
        name:"islam",
        age:"50",
        city:"mansora"
    })
})

//module      core module fs path  // npm  




// console.log(__dirname)
// console.log(path.join(__dirname,'../public'))

// const path = require("path")
// const x = path.join(__dirname,'../public')
// app.use(express.static(x))


/***************************lec8****************************** */
//hbs




app.set('view engine', 'hbs');
const path = require("path")
const viewsDirectory = path.join(__dirname,"../views")
app.set("views" , viewsDirectory)

/////////////////////////////////////////////
var hbs =require("hbs")
const Partialspath = path.join(__dirname,"../partials")
hbs.registerPartials( Partialspath)
//////////////////////////////////////////////



app.get('/',(req,res)=>{
    res.render('index',{
        title:'home',
        desc:"this is home page"
    })
})


app.get('/service',(req,res)=>{
    res.render('service',{
        title:'service',
        name:"islam",
        city:"mansoura",
        age:"50",
        image1:""
    })
})

app.get('/team',(req,res)=>{
    res.render('team',{
        title:'service',
        name:"islam",
        city:"mansoura",
        age:"50",
        image1:""
    })
})

////////////////////*lec9*/////////////////////////////////////


app.get('/products',(req,res)=>{
   console.log(req.query)
   console.log(req.query.model)
   res.send({
    products:"BMW 520 i"
   })
})

//////////////////////////////////////
//task

/*app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:"you must provide an address"
        })
    }
    res.send({
        location:req.query.address,
        forecast:"it is sunny"
    })
 })*/

/*
const geocode = require('./tools/geocode')
const forecast = require('./tools/forecast')
 app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:"you must provide an address"
        })
    }
    geocode(req.query.address,(error,data)=>{
        if(error){
            return res.send({error})
        }
        forecast(data.latitude,data.longitude,(error,forecastData)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast:forecastData,
                location:req.query.location,
            })
        })
    })
})
    */

 




app.get('*' ,(req,res)=>{
    res.send('404page id not found ')
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})