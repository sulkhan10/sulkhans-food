const router = require('express').Router()
const userRouter = require('./users')
const itemRouter = require('./items')
const categoryRouter = require('./categories')
const ingredientRouter = require('./ingredients')
const UserController = require('../controllers/UserController')
const authentication = require('../middlewares/authentication')

router.post('/login',UserController.login)
router.post('/register',authentication,UserController.register)

router.use('/items',itemRouter)
router.use('/categories',categoryRouter)
router.use('/ingredients',ingredientRouter)
router.use('/users',userRouter)

module.exports=router