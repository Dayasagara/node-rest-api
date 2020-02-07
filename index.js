const express = require('express');
const constant = require("./constants.js") //Contains constants
const controller = require("./controller")
const cors = require('cors') //middleware for cross origin resource sharing
const app = express(); //initialise app object for handling requests
app.use(cors());
const bodyParser = require('body-parser'); //body-parser for reading json bodies
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded
const port = process.env.port || '1234' //read the env variable for port or use 123 if not defined
var object = {}//An empty object
var key = 'users';//name of the key
object[key] = [];//initialise the users array

const server = app.listen(port, () => { console.log(`listening to port ${port}`) })//listen to port

app.get(constant.APIUrls.Version, (req, res) => {//controller for version
    controller.versionController(req, res)
})

app.get(constant.APIUrls.Ping, (req, res) => {//controller for ping
    controller.pingController(req, res)
})

app.get(constant.APIUrls.GetAllUsers, (req, res) => {//get request to get the list of all users
    controller.getController(req, res, object)
})

app.get(constant.APIUrls.GetUserById, (req, res) => {//get user details by id
    controller.getSingleController(req, res, object)
})

app.post(constant.APIUrls.Insert, (req, res) => {//create a user  
    controller.postController(req, res, object, key)
})

app.put(constant.APIUrls.Update, (req, res) => {//Update an existing user
    controller.putController(req, res, object)
})

app.delete(constant.APIUrls.Delete, (req, res) => {//Delete the user based on id
    controller.deleteController(req, res, object, key)
})

exports.obj = object//exporting object 