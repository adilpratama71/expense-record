// const express = require('express')
const Koa = require('koa');
const cors = require('@koa/cors');
const routes = require('./routes');
const bodyParser = require('koa-bodyparser');
const app = new Koa()
const errhandler = require('./middlewares/errhandler')
require('./config/mongoose')

app.use(cors())
app.use(bodyParser())
// app.use(express.urlencoded({ extended: false }))
// app.use(express.json())

app.use(routes.routes())
app.on('error', errhandler)
// app.use(errhandler)
module.exports = app
