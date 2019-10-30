const router = require('../config/router')
const { UserController } = require('../controllers')

router.post('/', UserController.register)
router.post('/login', UserController.login)
router.delete('/all', UserController.temporaryDestroy)

module.exports = router