module.exports = {
  getBooks
}

function getBooks(knex) {
  return knex('books')
}
