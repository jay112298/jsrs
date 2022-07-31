const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8000;

//Static path
const staticPath = path.join(__dirname , '../public')

// Built in Middleware
app.use(express.static(staticPath))


//Setting template engine for the project
app.set("view engine", "hbs")

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(8000, ()=>{
    console.log(`Listening to the port ${port}`)
})