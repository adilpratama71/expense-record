const { Expense } = require('../models')
module.exports = (req, res, next) => {
  const authorizationMessage = {
    status: 401,
    message: "Unauthorized"
  }
  Expense.find({
    _id: req.params.id,
    UserId: req.decode._id
  })
  .then(doc => doc ? next() : next(authorizationMessage))
  .catch(err => next(err))
} 