var constant = require('./constants')

//postController to create user records and insert them into list
exports.postController = (req, res, object, key) => {
    var user = {
        "userID": object[key].length + 1,
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "email": req.body.email,
        "phoneNo": req.body.phoneNo
    }
    object[key].push(user)
    res.send({ "status": "200 Ok" })
}

//getController returns the list of users
exports.getController = (req, res, object) => {
    res.send(object)
}

//ping the api to check if it returns 200 OK response
exports.pingController = (req, res) => {
    res.send({ "status": "200 Ok" })
}

//returns the version of the api
exports.versionController = (req, res) => {
    res.send({ "version": constant.version })
}

//returns the user details based on id
exports.getSingleController = (req, res, object) => {
    var i = 0
    var id = parseInt(req.params.id);
    console.log(id)
    for (i = 0; i < object.users.length; i++) {
        console.log(object.users[i].userID)
        if (object.users[i].userID === id) {
            var result = object.users[id - 1];
            console.log(result)
        }
    }
    res.send(result)
}

//deletes user based on id
exports.deleteController = (req, res, object, key) => {
    var id = parseInt(req.params.id);
    object.users.splice(id - 1, 1)//to delete one record based on id
    res.send({ "status": "200 Ok" })
}

//updates user details based on id
exports.putController = (req, res, object) => {
    var id = parseInt(req.params.id);
    var user = {
        "userID": id,
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "email": req.body.email,
        "phoneNo": req.body.phoneNo
    }
    //to replace the original record
    object.users[id - 1] = user
    res.send({ "status": "200 Ok" })
}
