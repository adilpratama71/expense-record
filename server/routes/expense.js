const { authorization, adminAuth } = require('../middlewares/authorization')
const { uploadImage, deleteImage } = require('../middlewares/imageAWS')
const { ExpenseController } = require('../controllers')
const router = require('../config/express').Router()
const multer = require('../helpers/multer')

router.post('/', multer.single('photo'), uploadImage, ExpenseController.create)
router.get('/', adminAuth, ExpenseController.findAll)
router.delete('/', adminAuth, ExpenseController.destroy)
router.get('/:id', authorization,ExpenseController.findOne)
router.put('/:id', authorization, multer.single('photo'), uploadImage, ExpenseController.update, deleteImage)
router.delete('/:id', authorization, ExpenseController.delete, deleteImage)
router.delete('/clear', adminAuth, ExpenseController.cleanDoc)

module.exports = router
