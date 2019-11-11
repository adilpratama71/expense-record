const router = require('../config/express').Router()
const { ExpenseController } = require('../controllers')
const uploadImg = require('../middlewares/uploadImg')
const authorization = require('../middlewares/authorization')

router.get('/', ExpenseController.findAll)
router.post('/', uploadImg, ExpenseController.create)
router.delete('/', ExpenseController.destroy)
router.get('/:id', authorization,ExpenseController.findOne)
router.put('/:id', authorization, ExpenseController.update)
router.delete('/:id', authorization, ExpenseController.delete)

module.exports = router
