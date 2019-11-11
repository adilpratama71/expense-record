const multer = require('multer')
const fileFilter = (req, file, cb) => {
  const [name, type] = file.mimetype.split('/')
  if (name == "image") {
    cb(null, true)
  }
  else {
    const error = { name: "MulterError", message: "File format should be image" }
    cb(error, false)
  }
}
const Multer = multer({
  limits: {
    fileSize: 5 * 1024 * 1024
  },
  storage: multer.MemoryStorage,
  fileFilter: fileFilter,
})

module.exports = Multer