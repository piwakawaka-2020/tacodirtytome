const express = require('express')

const server = express()

const taco = require('./routes/savedTaco')

server.use(express.json())
server.use(express.static('public'))

server.use('/v1/taco', taco)

module.exports = server
