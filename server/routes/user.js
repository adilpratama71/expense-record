const router = require('../config/router')
const { UserController } = require('../controllers')

router.post('/', UserController.register)
router.post('/login', UserController.login)
router.put('/:id', UserController.update)
router.get('/', UserController.findAll)
router.delete('/all', UserController.temporaryDestroy)

module.exports = router