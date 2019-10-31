const mongoose = require('../config/mongoose')
const Schema = mongoose.Schema

const expenseSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required field"],
  },
  description: {
    type: String,
    required: [true, "Description is required field"]
  },
  totalPrice: {
    type: Number,
    required: [true, "Total Price is required field"],
    min: [1, "Please input correct price"]
  },
  UserId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  photo: {
    type: String,
    default: null
  }
}, {
  timestamps: true
})


const Expense = mongoose.model('Expense', expenseSchema)

module.exports = Expense