var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')

var taskRoutes = require('./routes/tasks')

var app = express()

app.use(bodyParser.json())
app.use(cors({origin: '*'}))
app.use(express.static(path.join(__dirname, '../public')))

app.use('/api/v1/tasks', taskRoutes)

module.exports = app
