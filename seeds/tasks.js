
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, name: 'buy puppies'},
        {id: 2, name: 'finish personal project'},
        {id: 3, name: 'order pizza'}
      ]);
    });
};
