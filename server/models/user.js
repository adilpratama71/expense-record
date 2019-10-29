const mongoose = require('../config/mongoose')
const Schema = mongoose.Schema

const usernameValidators = [
  {
    validator: function isUnique(value) {
      return new Promise((resolve, reject) => {
        User.findOne({ _id: { $ne: this._id }, username: value })
        .then(user => user ? resolve(false) : resolve(true))
        .catch(err => reject(err))
      })
    },
    message: "Username already exists"
  },
  {
    validator: function isAlphanumeric(value) {
      return /[a-zA-Z0-9]/g.test(value)
    },
    message: "Username only contain letters and numbers"
  }
]

const emailValidators = [
  {
    validator: function isUnique(value) {
      return new Promise((resolve, reject) => {
        User.findOne({ _id: { $ne: this._id }, email: value })
        .then(user => user ? resolve(false) : resolve(true))
        .catch(err => reject(err))
      })
    },
    message: "Email already exists"
  },
  {
    validator: function isEmail(value) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
    }
  }
]

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required field"],
    minlength: 5,
    maxlength: 25,
    validate: usernameValidators
  },
  email: {
    type: String,
    required: [true, "Email is required field"],
    validate: emailValidators
  }
})

const User = mongoose.model("User", userSchema)

module.exports = User