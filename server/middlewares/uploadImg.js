const { uploadFile } = require('../helpers/aws-s3')
module.exports = (req, res, next) => {
  console.log(req.body)
  next()
}