const { uploadFile } = require('../helpers/aws-s3')
module.exports = (req, res, next) => {
  uploadFile(req.file)
  .then(img => console.log(img))
  .catch(err => console.log(err))
}