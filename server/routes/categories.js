const CategoryController = require('../controllers/CategoryController')
const authentication = require('../middlewares/authentication')

const router = require('express').Router()

router.get('/',CategoryController.allCategories)
router.get('/:categoryId',CategoryController.getCategoryById)

router.use(authentication)
router.post('/',CategoryController.createCategory)
router.delete('/:categoryId',CategoryController.deleteCategory)
router.put('/:categoryId',CategoryController.updateCategory)

module.exports=router