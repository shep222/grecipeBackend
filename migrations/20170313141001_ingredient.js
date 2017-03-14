exports.up = (knex) => {
    return knex.schema.createTable('ingredient', (ingredient) => {
        ingredient.increments()
        ingredient.text('name')
    });
}

exports.down = (knex) => {
    return knex.schema.dropTableIfExists('ingredient')
};
