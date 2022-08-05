const express = require('express')
const app = express()
const hbs = require('hbs')
const path = require('path')
const port = process.env.PORT || 8000;

//Template Path
const template_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")

// View Engine Declaration

app.set('view engine', 'hbs')
app.set('views', template_path)
hbs.registerPartials(partials_path)

//Static Path
app.use(express.static(path.join(__dirname, '../public')))

//Routing
app.get("/", (req, res)=>{
    res.render("index")
})

app.get("/about", (req, res)=>{
    res.render("about")
})

app.get("/weather", (req, res)=>{
    res.render("weather")
})

app.get("*", (req, res)=>{
    res.render("404")
})

app.listen(port, ()=>{
    console.log(`Listening to the port ${port}`)
})