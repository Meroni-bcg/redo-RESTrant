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

// 11. Call app.listen(3000) to keep server open

app.listen(3000)
