const db = require('../model/database.js')
const jwt = require('jsonwebtoken')
const { key } = require('../config/jwt.json')

function promisify(fn) {
  return function(){
    const args = [...arguments]
    return new Promise((resolve, reject) => {
      fn(...args, (err, content) => {
        if(err) return reject(err)
        resolve(content)
      })
    })
  }
}

const login = async (req, res) => {

  const { username, password } = req.body
  try {

    const user = await db()

    if(username != user.username || password != user.password){
      throw new Error('ilapasl\'droit')
    }

    const signAsynchronous = promisify(jwt.sign)
    const token = await signAsynchronous({id: user.id}, key, { expiresIn: '1d' })

    res.json({ t: token })

  } catch(err) {
    res.json({'error': err.message})
  }
}

module.exports = {
  login
}