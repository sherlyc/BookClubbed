var express = require('express')
let router = express.Router()

router.get('/', (req, res) => {
  req.app.get('knex')('tasks').select()
    .then((result) => {
      res.json(result)
    })
})

router.post('/', (req, res) => {
  req.app.get('knex')('tasks').insert(req.body)
    .then((result) => {
      res.sendStatus(201)
    })
})

module.exports = router
