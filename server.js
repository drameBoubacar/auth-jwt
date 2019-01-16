const express = require('express')
const app = express()
const login = require('./controller/login')
const home = require('./controller/home')
const middleware = require('./handler/middleware')

app.use(express.json())

app.post('/login', login.login)

app.use(middleware.auth)

app.get('/', home.home)

app.use((err, req, res, next) => res.json({'error': err.message}))

app.listen(8000)