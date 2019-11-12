const { uploadFile, deleteFile } = require('../helpers/aws-s3')
module.exports = {
  uploadImage: (req, res, next) => {
    uploadFile(req.file)
    .then(data => {
      req.body.photo = data.Location
      next()
    })
    .catch(err => next(err))
  },
  deleteImage: (req, res, next) => {
    const [path, key] = req.image.split('.com/')
    deleteFile(key)
    .then(data => res.status(204).json(data))
    .catch(err => next(err))
  }
}