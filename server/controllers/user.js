const { User } = require('../models')

class UserController {
  static register (req, res, next) {
    const { username, email, password, photo, gender } = req.body
    User.create({ username, email, password, photo, gender })
    .then(doc => {
      res.status(200).json({ _id: doc._id, username: doc.username, email: doc.email, gender: doc.gender })
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