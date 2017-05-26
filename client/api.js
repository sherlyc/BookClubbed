import request from 'superagent'

export function getBooks(callback) {
  request
    .get('/books')
    .end((err, res) => {
      callback(res.body)
    })
}
