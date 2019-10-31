const router = require('../config/express').Router()
const { ExpenseController } = require('../controllers')

router.post('/', ExpenseController.create)


module.exports = router
