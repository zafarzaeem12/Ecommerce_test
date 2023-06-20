const UserRouter = require('express').Router()
const UserImage = require('../Middleware/UserImage');

const {
    createUser,
    LoginUser
} = require('../Contollers/users')

UserRouter.post('/createUsers', UserImage.upload , createUser)
UserRouter.post('/login',   LoginUser)

module.exports = UserRouter