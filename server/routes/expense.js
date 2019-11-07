const router = require('../config/express').Router()
const { ExpenseController } = require('../controllers')
const authorization = require('../middlewares/authorization')

router.get('/', ExpenseController.findAll)
router.get('/:id', authorization,ExpenseController.findOne)
router.post('/', ExpenseController.create)
router.put('/:id', authorization, ExpenseController.update)
router.delete('/:id', authorization, ExpenseController.delete)

module.exports = router
