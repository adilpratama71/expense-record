const User = require('../models/user')

class UserController {
  static register (req, res, next) {
    User.create({ username: "sasuke" })
    .then(newUser => console.log(newUser))
    .catch(err => console.log(err))
  }
}

module.exports = UserController