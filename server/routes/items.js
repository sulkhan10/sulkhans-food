const ItemController = require('../controllers/ItemController')
const authentication = require('../middlewares/authentication')

const router = require('express').Router()

router.get('/',ItemController.allItems)
router.get('/:itemId',ItemController.getItemById)

router.use(authentication)
router.post('/',ItemController.createItem)
router.delete('/:itemId',ItemController.deleteItem)
router.put('/:itemId',ItemController.editItem)

module.exports=router