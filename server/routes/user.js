const router = require('../config/router')
const { UserController } = require('../controllers')

router.post('/', UserController.register)

module.exports = router