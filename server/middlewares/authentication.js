module.exports = (req, res, next) => {
  try {
    req.decode = require('../helpers/jwt').verifyToken(req.headers.access_token)
    next()
  } catch (err) {
    console.log("masuk err")
    next(err)
  }
}