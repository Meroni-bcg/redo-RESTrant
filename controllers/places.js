//We will use places to describe our restaurants.

//create and export an express.Router()

const router = require('express').Router()

// first route = index page called the GET route : eventually show a list of all places

router.get("/", (req,res) => {
    res.send("restaurants info")
})

module.exports = router
