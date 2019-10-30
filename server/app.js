const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const app = express()
const errhandler = require('./middlewares/errhandler')
require('./config/mongoose')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', routes)
app.use(errhandler)
module.exports = app
