const mongoose = require('mongoose')
const uri = process.env.URI || 'mongodb://localhost:27017/expense-record'
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}

mongoose.connect(uri, options)
.then(() => console.log(`Connect to ${uri}`) )
.catch(err => console.log(err))