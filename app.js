const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
db = require('./db/connection');

app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3000
}, function() {
    console.log(`APP RUNING IN ${process.env.PORT ?? 3000}`)
})
// Middlewares
app.use(bodyParser.urlencoded({extends: false}))
app.use(bodyParser.json())
app.use(cors())

// database connection
db
    .authenticate()
    .then(() => {
        console.log("Database connect with sucess!")
    })
    .catch(err => {
        console.log("Connection error!")
    })

// routes
app.use('/pacitents', require('./routes/pacitentRoute'))