const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const to = require('../helpers/asyncAwaitHandler')

class UserController {
  static async register (req, res, next) {
    const { username, email, password, photo, gender } = req.body
    const [err, doc] = await to(User.create({ username, email, password, photo, gender }))
    err ? next(err) : res.status(200).json({ 
      _id: doc._id, username: doc.username, email: doc.email, photo: doc.photo, gender: doc.gender
    }) 
  }

  static login (req, res, next) {
    const { email, password } = req.body
    const errorWrongReq = { name: "server", status: 400, message: "Username / password wrong" }
    let user;
    User.findOne({ email }).select(['-password'])
    .then(doc => {
      if (doc) {
        user = doc
        return comparePassword(password, doc.password)
      }
      else {
        next(errorWrongReq)
      }
    })
    .then(result => {
      if (result) {
        
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