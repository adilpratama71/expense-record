const router = require('../config/express').Router()
const { UserController } = require('../controllers')
const { adminAuth, userAuth } = require('../middlewares/authorization')

router.post('/', UserController.register)
router.post('/login', UserController.login)
router.put('/:id', userAuth, UserController.update)
router.get('/', adminAuth, UserController.findAll)
router.delete('/all', adminAuth, UserController.temporaryDestroy)

module.exports = router