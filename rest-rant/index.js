// require is a statement that reads a js file executes it, and then proceeds to return the export object

require("dotenv").config()
// Require express at the top of the file
const express = require ("express")

//  Initialize the app variable
const app = express ()

//    a. Call app.get()
//    b. Set ‘/‘ as the path (first arg)
//    c. Write callback function with req, res
//    d. Call res.send(‘hello world’) 

app.get('/', (req, res) => {
    res.send("Hello world!")
})

// 2nd route must be below other route or itll overide. use wildcard *

app.get("*", (req, res) =>{
    res.send("<h1> 404 Page </h1>")
})

// pull the PORT variable from the .env file

app.listen(process.env.PORT)
