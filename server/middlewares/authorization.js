const { Expense, User } = require('../models')
const message = { status: 403, message: "Not Authorized" }
module.exports = {
  authorization: (req, res, next) => {
    Expense.findOne({
      _id: req.params.id,
      UserId: req.decode._id
    })
    .then(doc => doc ? next() : next(message))
    .catch(err => next(err))
  },
  userAuth: (req, res, next) => {
    User.find({
      _id: req.params.id
    })
    .then(doc => doc ? doc._id == req.decode._id ? next() : next(message) : next(message))
    .catch(err => next(err))
  },
  adminAuth: (req, res, next) => {
    req.decode.username == process.env.ADMIN_KEY ? next() : next(message) 
  }
}