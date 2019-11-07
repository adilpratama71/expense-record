const router = require('../config/express').Router()
const { ExpenseController } = require('../controllers')

router.get('/', ExpenseController.findAll)
router.get('/:id', ExpenseController.findOne)
router.post('/', ExpenseController.create)
router.put('/:id', ExpenseController.update)
router.delete('/:id', ExpenseController.delete)

module.exports = router
