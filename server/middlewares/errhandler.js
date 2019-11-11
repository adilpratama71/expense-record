module.exports = (err, req, res, next) => {
  var objectOfError = { from: "server", message: "" }
  if (err.name == "JsonWebTokenError") {
    objectOfError.message = err.message
    res.status(401).json(objectOfError)
  }
  else if (err.name == "ValidationError") {
    const errors = Object.keys(err.errors)
    objectOfError.message = errors.map(el => err.errors[el].message)
    res.status(400).json(objectOfError)
  }
  else if (err.name == "Expenses Error") {
    objectOfError.message = err.message
    res.status(err.status).json(objectOfError)
  }
  else if (err.name == "MulterError") {
    objectOfError.message = err.message
    if (err.message == "File too large") {
      res.status(413).json(objectOfError)
    }
    else if (err.message == "File format should be image"){
      res.status(415).json(objectOfError)
    }
  }
}