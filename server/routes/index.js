const router = require('../config/router')
const userRoutes = require('./user')

router.use('/users', userRoutes)

module.exports = router