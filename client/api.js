import request from 'superagent'

export function getBooks(callback) {
  request
    .get('/books')
    .end((err, res) => {
      callback(res.body)
    })
}

export function saveBook(book, callback) {
    request
    .post('/add')
    .send(book)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null)
      }
    })
}
