const router = require('../config/express').Router()
const { ExpenseController } = require('../controllers')
const uploadImg = require('../middlewares/uploadImg')
const multer = require('../helpers/multer')
const authorization = require('../middlewares/authorization')

router.get('/', ExpenseController.findAll)
router.post('/', multer.single('photo'), uploadImg, ExpenseController.create)
router.delete('/', ExpenseController.destroy)
router.get('/:id', authorization,ExpenseController.findOne)
router.put('/:id', authorization, ExpenseController.update)
router.delete('/:id', authorization, ExpenseController.delete)

module.exports = router
