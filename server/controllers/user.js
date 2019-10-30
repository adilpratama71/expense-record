const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
  static register (req, res, next) {
    const { username, email, password, photo, gender } = req.body
    User.create({ username, email, password, photo, gender })
    .then(doc => res.status(200).json({
      _id: doc._id, username: doc.username, email: doc.email, photo: doc.photo, gender: doc.gender
    }))
    .catch(err => res.send(err))
  }

  static login (req, res, next) {
    const { email, password } = req.body
    const errorWrongReq = { name: "server", status: 400, message: "Username / password wrong" }
    User.findOne({ email })
    .then(doc => {
      console.log(doc)
      if (doc) {
        if (comparePassword(password, doc.password)) {
          const payload = { _id: doc._id, username: doc.username }
          const access_token = generateToken(payload)
          res.status(200).json({ access_token })
        } 
        else {
          next(errorWrongReq)
        }
      }
      else {
        next(errorWrongReq)
      }
    })
    .catch(err => res.send(err))

  }
  //temporary
  static temporaryDestroy (req, res, next) {
    User.deleteMany({})
    .then(result => res.send(result))
    .catch(err => res.send(err))
  }
}

module.exports = UserController