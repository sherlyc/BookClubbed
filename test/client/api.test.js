import test from 'ava'
import nock from 'nock'

import * as api from '../../client/api'

test.cb('api.getTasks', t => {
  let scope = nock('http://localhost:80')
    .get('/api/v1/tasks')
    .reply(200, {message: 'test'})

  api.getTasks((actual) => {
    scope.done()
    t.is(actual.message, 'test')
    t.end()
  })
})
