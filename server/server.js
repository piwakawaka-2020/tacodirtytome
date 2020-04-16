const express = require('express')

const server = express()

const randTaco = require('./routes/savedTaco')

server.use(express.json())
server.use(express.static('public'))

server.use('/api/v1/savedTacos', randTaco)

module.exports = server
