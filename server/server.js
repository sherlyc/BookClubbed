var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')

var bookRoutes = require('./routes/books')

var app = express()

app.use(bodyParser.json())
app.use(cors({origin: '*'}))
app.use(express.static(path.join(__dirname, '../public')))

app.use('/books', bookRoutes)

module.exports = app
