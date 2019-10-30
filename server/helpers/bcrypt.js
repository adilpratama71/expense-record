const bcrypt = require('bcrypt')
const salt = Number(process.env.SALT)

module.exports = {
  hashPassword: (password) => {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, salt)
      .then(hash => {
        resolve(hash)
      })
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
