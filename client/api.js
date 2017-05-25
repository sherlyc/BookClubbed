import request from 'superagent'

export function getTasks(callback) {
  request
    .get('/api/v1/tasks')
    .end((err, res) => {
      callback(res.body)
    })
}

export function saveTask(task, callback) {
  request
    .post('/api/v1/tasks')
    .send(task)
    .end((err, res) => {
      callback()
    })
}


