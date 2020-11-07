// Setup empty JS object to act as endpoint for all routes
projectData = {};


//api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
// Require Express to run server and routes
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors())
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
const server = app.listen(port, listening)

function listening (){

console.log(`The server has started on port ${port}`);
console.log("The server is listening ..... ");

}

app.get("/get",getContent)

function getContent (req, res){

  res.json(projectData)

}

app.post("/add", addJuornal)
function addJuornal(req, res){

  const body = req.body
  projectData["date"] = body.date
  projectData["temp"] = body.temp
  projectData["content"] = body.content

  console.log(projectData)

}
