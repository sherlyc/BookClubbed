var express = require('express')
let router = express.Router()
var db = require('../db')

router.get('/', (req, res) => {
  db.getBooks(req.app.get('knex'))
    .then((result) => {
      res.json(result)
    })
})

router.get('/:id', (req,res) => {
  db.getBook(req.app.get('knex'),req.params.id)
    .then((result) => {
      res.json(result)
    })
})


// router.post('/', (req, res) => {
//   req.app.get('knex')('tasks').insert(req.body)
//     .then((result) => {
//       res.sendStatus(201)
//     })
// })

module.exports = router
