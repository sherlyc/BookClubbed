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
      t.is(res.body.length, 4)
    })
})
