import test from 'ava'
import request from 'supertest'

import app from '../../server/server'
import setupDb from './setup-db'

setupDb(test, (knex) => {
  app.set('knex', knex)
})

test('GET /books', t => {
  return request(app)
    .get('/books')
    .expect(200)
    .then((res) => {
      t.is(res.body.length, 16)
    })
})

test('GET book 1 by id', t =>{
  return request(app)
  .get('/books/1')
  .expect(200)
  .then((res) => {
    var expected = 'Red Sister'
    t.is(res.body.title, expected)
  })
})
// 
// test('Insert book', t => {
//   return request(app)
//     .post('/AddBookForm')
//     .send({title:'test'})
//     .expect(200)
//     .end()
// })
