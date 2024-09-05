const express = require('express')
const bodyParser = require('body-parser')

const app = express()
db = require('./db/connection');

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`APP RUNING IN ${PORT}`)
})
// Middlewares
app.use(bodyParser.urlencoded({extends: false}))

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