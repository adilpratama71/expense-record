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
    const { name, description, totalPrice, photo, upload } = req.body
    Expense.findByIdAndUpdate(req.params.id, {
      name, description, totalPrice, photo
    }, { omitUndefined: true, runValidators: true })
    .then(doc => {
      if (upload) {
        req.image = doc.photo
        next()
      }
      else {
        res.status(201).json(doc)
      }
    })
    .catch(err => next(err))
  }

  static delete (req, res, next) {
    Expense.findByIdAndUpdate(req.params.id,{
      destroy: true
    }).select(["-destroy"])
    .then(doc => {
      req.image = doc.photo
      next() 
    })
    .catch(err => next(err))
  }

  static findAll (req, res, next) {
    Expense.find({ destroy: false }).select(["-destroy"])
    .then(doc => res.status(200).json(doc))
    .catch(err => next(err))
  }

  static findOne (req, res, next) {
    const notFoundmessage = { name: "Expenses Error", message: "Data Not Found", status: 404 }
    Expense.find({ _id: req.params.id, destroy: false })
    .then(doc => doc ? res.status(200).json(doc) : next(notFoundmessage))
    .catch(err => next(err))
  }

  static destroy (req, res, next) {
    Expense.deleteMany({})
    .then(doc => res.status(204).json(doc))
    .catch(err => next(err))
  }

  static cleanDoc (req, res, next) {
    Expense.deleteMany({
      destroy: true
    })
    .then(doc => res.status(204).json(doc))
    .catch(err => next(err))
  }
}

module.exports = ExpenseController