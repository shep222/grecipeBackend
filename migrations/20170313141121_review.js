exports.up = (knex) => {
    return knex.schema.createTable('review', (review) => {
        review.increments()
        review.text('reviewBody')
        review.timestamp('reviewTime').defaultTo(knex.fn.now())
        review.string('user_id').references('email').inTable('user').onDelete('CASCADE')
        review.integer('recipe_id').references('id').inTable('recipe').onDelete('CASCADE')
        review.integer('rating')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('review')
};
