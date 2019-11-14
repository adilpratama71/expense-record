const { uploadFile, deleteFile } = require('../helpers/aws-s3')
module.exports = {
  uploadImage: (req, res, next) => {
    if (req.file) {
      uploadFile(req.file)
      .then(data => {
        req.body.photo = data.Location
        req.body.upload = true
        next()
      }) 
      .catch(err => next(err))
    }
    else {
      next()
    }
  },
  deleteImage: (req, res, next) => {
    const [path, key] = req.image.split('.com/')
    let status;
    req.body.upload ? status = 201 : status = 204
    deleteFile(key)
    .then(data => res.status(status).json(data))
    .catch(err => next(err))
  }
}