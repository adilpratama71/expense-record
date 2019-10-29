if (process.env.NODE_ENV == "development") {
  require('dotenv').config()
}

const http = require('http')
const app = require('../app')
const PORT = process.env.PORT || 3000

const server = http.createServer(app)

server.listen(() => console.log(`Listening on port: ${PORT}`))

