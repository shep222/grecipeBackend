exports.up = function(knex) {
  return knex.schema.createTable('user', (user) => {
    user.string('email').primary()
    user.string('postName')
  })
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('user')
};
