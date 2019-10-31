const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
  static register (req, res, next) {
    const { username, email, password, photo, gender } = req.body
    User.create({ username, email, password, photo, gender })
    .then(doc => res.status(201).json({
      _id: doc._id, username: doc.username, email: doc.email, photo: doc.photo, gender: doc.gender
    }))
    .catch(err => next(err))
  }

  static login (req, res, next) {
    const { email, password } = req.body
    const errorWrongReq = { name: "server", status: 400, message: "Username / password wrong" }
    User.findOne({ email })
    .then(doc => {
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
    .catch(err => next(err))
  }

  static update (req, res, next) {
    const { username, email, password, gender, photo } = req.body
    User.findOneAndUpdate({ _id: req.params.id }, {
      username, email, password, photo, gender
    }, { new: true, runValidators: true, select: ['-password'], omitUndefined: true })
    .then(doc => res.status(201).json(doc))
    .catch(err => next(err))
  }

  static findAll (req, res, next) {
    User.find().select(['-password'])
    .then(docs => res.status(200).json(docs))
    .catch(err => next(err))
  } 
  //temporary
  static temporaryDestroy (req, res, next) {
    User.deleteMany({})
    .then(result => res.send(result))
    .catch(err => next(err))
  }
}

module.exports = UserController