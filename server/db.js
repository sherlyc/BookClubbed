module.exports = {
  getBooks,
  getBook,
  saveBook
}

function getBooks(knex) {
  return knex('books')
}


function getBook(knex,id) {
  return knex('books').where('id', id).first()
}

function saveBook(knex, book) {
  return knex('books').insert(book)
}
