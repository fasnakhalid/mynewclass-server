//dependencies
//web server
const express = require('express')
//form submission
const bodyParser = require('body-parser')

//Database connection
const mongoose = require('mongoose')

//creating and configuring the web server
const app = express()
app.use(bodyParser.json())

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

//database
mongoose.connect(process.env.DATABASE_URL,{
}).then((res) => {
    console.log('Connected')
}).catch((err) =>{
    console.log(`Cannot connect: ${err}`)
})

//start the server
app.listen(3000)

module.exports = app
