exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function (table){
      table.increments('id').primary()
      table.string('title')
      table.text('description')
      table.string('author')
      table.text('image')
      table.string('genre')
    

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books')
};
