const { Expense } = require('../models')

class ExpenseController {
  static create (req, res, next) {
    const { name, description, totalPrice, photo } = req.body
    const UserId = req.decode._id
    Expense.create({ name, description, totalPrice, photo, UserId })
    .then(doc => res.status(200).json(doc))
    .catch(err => next(err))
  }
}

module.exports = ExpenseController