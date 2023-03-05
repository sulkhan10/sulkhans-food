const IngredientController = require('../controllers/IngredientController')

const router = require('express').Router()

router.get('/',IngredientController.allIngredients)

module.exports=router