const { Expense } = require('../models')

class ExpenseController {
  static create (req, res, next) {
    const { name, description, totalPrice, photo } = req.body
    const UserId = req.decode._id
    Expense.create({ name, description, totalPrice, photo, UserId })
    .then(doc => res.status(201).json(doc))
    .catch(err => next(err))
  }

  static update (req, res, next) {
    const { name, description, totalPrice, photo } = req.body
    Expense.findByIdAndUpdate(req.params.id, {
      name, description, totalPrice, photo
    }, { new: true, omitUndefined: true, runValidators: true })
    .then(doc => res.status(201).json(doc))
    .catch(err => next(err))
  }

  static delete (req, res, next) {
    Expense.findByIdAndDelete(req.params.id)
    .then(doc => res.status(200).json(doc))
    .catch(err => next(err))
  }

  static findAll (req, res, next) {
    Expense.find()
    .then(doc => res.status(200).json(doc))
    .catch(err => next(err))
  }

  static findOne (req, res, next) {
    const notFoundmessage = {
      name: "Expenses Error",
      message: "Data Not Found",
      status: 404
    }
    Expense.findById(req.params.id)
    .then(doc => doc ? res.status(200).json(doc) : next(notFoundmessage))
    .catch(err => next(err))
  }

}

module.exports = ExpenseController