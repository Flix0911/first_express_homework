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

app.get("/magic/:eightballquestion", (req, res) => {
    const eightBallQuestion = req.params.eightballquestion
    const eightBallResponse = [
        "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"
    ];
    const responseIndex = Math.floor(Math.random() * eightBallResponse.length)
    const randomResponse = eightBallResponse[responseIndex]
    
    res.send(`<h1>${eightBallQuestion}?</h1> <h2>${randomResponse}</h2>`)
    // const length = eightBallResponse.length
    // res.send(console.log(length))
    //Used above 2 lines to figure out the length of my array. I typed magic/length in my browser, and it logged '20'. Now I know how long my array is
    //I ultimately didn't need the above but I was glad I practiced it

})


//turn on the server to listen

app.listen(3000, () => {console.log("server is listening on port 3000")})