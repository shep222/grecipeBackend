exports.up = (knex) => {
    return knex.schema.createTable('recipe', (recipe) => {
        recipe.increments()
        recipe.string('name')
        recipe.timestamp('commentTime').defaultTo(knex.fn.now())
        recipe.string('user_id').references('email').inTable('user').onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('recipe')
};
