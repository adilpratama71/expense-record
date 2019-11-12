const router = require('../config/express').Router()
const { ExpenseController } = require('../controllers')
const uploadImg = require('../middlewares/uploadImg')
const multer = require('../helpers/multer')
const { authorization, adminAuth } = require('../middlewares/authorization')

router.post('/', multer.single('photo'), uploadImg, ExpenseController.create)
router.get('/', adminAuth, ExpenseController.findAll)
router.delete('/', adminAuth, ExpenseController.destroy)
router.get('/:id', authorization,ExpenseController.findOne)
router.put('/:id', authorization, ExpenseController.update)
router.delete('/:id', authorization, ExpenseController.delete)

module.exports = router
