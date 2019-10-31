const Authentication = require('../middlewares/authentication')
const router = require('../config/express').Router()
const userRoutes = require('./user')
const expenseRoutes = require('./expense')

router.use('/users', userRoutes)

router.use(Authentication)
router.use('/expenses', expenseRoutes)

module.exports = router