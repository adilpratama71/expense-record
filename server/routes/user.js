const router = require('../config/express').Router()
const { UserController } = require('../controllers')

router.post('/', UserController.register)
router.post('/login', UserController.login)
router.put('/:id', UserController.update)
router.get('/', UserController.findAll)
router.delete('/all', UserController.temporaryDestroy)

module.exports = router