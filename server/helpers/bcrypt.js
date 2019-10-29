const bcrypt = require('bcrypt')

module.exports = {
  hashPassword: (password) => {
    return bcrypt.hashSync(password, process.env.SALT)
  },
  comparePassword: (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword)
  }
}
