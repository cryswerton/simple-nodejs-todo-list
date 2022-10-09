const express = require("express")
const todoController = require("./controllers/todoController")

const port = 3000

const app = express()

// set up template engine
app.set("view engine", "ejs")

// static files
app.use(express.static("./public"))

// fire controllers
todoController(app)

// listen to port
app.listen(port)
console.log(`The server is listening to port ${port}`)