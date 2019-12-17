const Authentication = require('../middlewares/authentication')
// const router = require('../config/express').Router()
const Router = require('../config/koa');
const router = new Router;
const userRoutes = require('./user');
const expenseRoutes = require('./expense');

router.use('/users', userRoutes.routes())

// router.use(Authentication)
// router.use('/expenses', expenseRoutes)

module.exports = router