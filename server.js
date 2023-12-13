//import the express library

const express = require("express")

//create express application object

const app = express()

//routes

app.get("/greeting/:firstname", (req, res) => {
    const firstName = req.params.firstname
    res.send(`<h1>Hey there, ${firstName}, how ya been!?</h1>`)
})

app.get("/tip/:total/:tippercentage", (req, res) => {
    const total = req.params.total
    const tipPercentage = req.params.tippercentage
    res.send(`You tip should be ${total * (tipPercentage/100)}`)
})

//turn on the server to listen

app.listen(3000, () => {console.log("server is listening on port 3000")})