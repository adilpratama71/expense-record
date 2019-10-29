const bcrypt = require('bcrypt')

module.exports = {
  hashPassword: (password) => {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, process.env.SALT)
      .then(hash => resolve(hash))
      .catch(err => reject(err))
    })
  },
  comparePassword: (password, dbPassword) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, dbPassword)
      .then(res => resolve(res))
      .catch(err => reject(err)) 
    })
  }
}
