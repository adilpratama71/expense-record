const router = require('../config/express').Router()
const { ExpenseController } = require('../controllers')

router.post('/', ExpenseController.create)
router.put('/:id', ExpenseController.update)
router.get('/', ExpenseController.findAll)

module.exports = router
