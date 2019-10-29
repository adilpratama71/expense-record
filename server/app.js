const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const app = express()

require('./config/mongoose')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', routes)

module.exports = app
