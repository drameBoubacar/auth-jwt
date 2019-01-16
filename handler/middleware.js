const jwt = require('jsonwebtoken')
const { key } = require('../config/jwt.json')

const auth = (req, res, next) => {
  const { token } = req.headers
  try {
    req.user = jwt.verify(token, key)
    next()
  } catch(err) {
    next(err)
  }
}

module.exports = {
  auth
}