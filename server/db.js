module.exports = {
  getBooks,
  getBook
}

function getBooks(knex) {
  return knex('books')
}


function getBook(knex,id) {
  return knex('books').where('id', id).first()
}
