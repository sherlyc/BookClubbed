import test from 'ava'
import request from 'supertest'

import app from '../../server/server'
import setupDb from './setup-db'

setupDb(test, (knex) => {
  app.set('knex', knex)
})

test('GET /api/v1/tasks', t => {
  return request(app)
    .get('/api/v1/tasks')
    .expect(200)
    .then((res) => {
      t.is(res.body.length, 3)
    })
})

test('POST /api/v1/tasks', t => {
  return request(app)
    .post('/api/v1/tasks')
    .send({name: 'buy bananas'})
    .expect(201)
    .then(() => {
      return app.get('knex')('tasks').select()
        .then((result)  => {
          t.is(result.length, 4)
        })
    })
})



