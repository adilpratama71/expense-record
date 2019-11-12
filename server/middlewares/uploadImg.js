const { uploadFile } = require('../helpers/aws-s3')
module.exports = (req, res, next) => {
  uploadFile(req.file)
  .then(data => {
    req.body.photo = data.Location
    next()
  })
  .catch(err => next(err))
}