const AWS = require('aws-sdk')
const BUCKET_NAME = process.env.BUCKET_NAME

const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY
})

module.exports = {
  uploadFile: function (file) {
    const params = {
      ACL: 'public-read',
      Bucket: BUCKET_NAME,
      Key: `${file.originalname}${Date.now()}`,
      Body: file.buffer,
      ContentType: file.mimetype
    }
    return new Promise ((resolve, reject) => {
      s3.upload(params, (err, data) => {
        err ? reject(err) : resolve(data)
      })
    })
  },
  deleteFile: function (key) {
    const params = {
      Bucket: BUCKET_NAME,
      Key: key
    }
    return new Promise ((resolve, reject) => {
      s3.deleteObject(params, function (err, data) {
        err ? reject(err) : resolve(data)
      })
    })
  }
}

