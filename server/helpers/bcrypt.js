const bcrypt = require('bcrypt')
const salt = Number(process.env.SALT)

module.exports = {
  hashPassword: (password) => {
    return bcrypt.hashSync(password, salt)
  },
  comparePassword: (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword)
  }
}
