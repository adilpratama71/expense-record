const mongoose = require('../config/mongoose')
const { hashPassword } = require('../helpers/bcrypt')
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
    },
    message: "Invalid email address"
  }
]

const enumGender = {
  values: ['male', 'female'],
  message: "Gender between male & female"
}

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required field"],
    minlength: [5, "Username must be at least 5 characters long"],
    maxlength: [25, "Username must be no longer than 25 characters long"],
    validate: usernameValidators
  },
  email: {
    type: String,
    required: [true, "Email is required field"],
    validate: emailValidators
  },
  password: {
    type: String,
    required: [true, "Password is required field"],
    minlength: [6, "Password must be at least 6 characters long"]
  },
  gender: {
    type: String,
    required: [true, "Gender is required field"],
    enum: enumGender
  },
  photo: {
    type: String,
    default: null
  }
}, {
  timestamps: true
})

userSchema.pre('save', function (next) {
  if (!this.photo) {
    this.gender == "male" ? this.photo = process.env.DUMMYMALE : this.photo = process.env.DUMMYFEMALE
  }
  hashPassword(this.password)
  next()
})

const User = mongoose.model("User", userSchema)

module.exports = User