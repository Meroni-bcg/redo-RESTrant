// require is a statement that reads a js file executes it, and then proceeds to return the export object

require("dotenv").config()
// Require express at the top of the file
const express = require ("express")

//  Initialize the app variable
const app = express ()

// route to define view engine

app.set("view engine","jsx")
app.engine("jsx", require("express-react-views").createEngine())
// import the router created in places.js
// The first argument to app.use, /places sets all routes in the places controller relative to /places. 
// This means that /places will be added in front of any other path we define in the controller.

app.use("/places", require("./controllers/places"))

//    a. Call app.get()
//    b. Set ‘/‘ as the path (first arg)
//    c. Write callback function with req, res
//    d. Call res.send(‘hello world’) 

app.get('/', (req, res) => {
    res.render("Home")
})

// 2nd route must be below other route or itll overide. use wildcard *
//return a status code 404 by adding res.status(404)
app.get("*", (req, res) =>{
    res.render("error404")
})

// pull the PORT variable from the .env file

app.listen(process.env.PORT)
