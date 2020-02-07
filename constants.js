const APIUrls = {
    "Version": "/v1/users/version",
    "Ping": "/v1/users/ping",
    "APIDocs": "/v1/users/apidocs",
    "Insert": "/v1/users/insert",
    "Delete": "/v1/users/delete/:id",
    "GetAllUsers": "/v1/users",
    "GetUserById": "/v1/users/:id",
    "Update": "/v1/users/:id"
}, version = 'v1'

module.exports = {
    APIUrls, version
}