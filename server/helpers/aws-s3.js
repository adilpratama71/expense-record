const fs = require('fs')
const AWS = require('aws-sdk')
const BUCKET_NAME = process.env.BUCKET_NAME

const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY
})

module.exports = {
  uploadFile: function (file) {
    const setup = {
      Bucket: BUCKET_NAME,
      Key: 'test.jpg',
      Body: fs.readFileSync(file)
    }
    return new Promise ((resolve, reject) => {
      s3.upload(setup, (err, data) => {
        err ? reject(err) : resolve(data)
      })
    })
  }
}

