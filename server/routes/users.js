const UserController = require('../controllers/UserController')

const router = require('express').Router()

router.get('/',UserController.allUsers)

module.exports=router