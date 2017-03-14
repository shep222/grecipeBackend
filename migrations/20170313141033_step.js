exports.up = (knex) => {
    return knex.schema.createTable('step', (step) => {
        step.increments()
        step.text('stepBody')
        step.integer('recipe_id').references('id').inTable('recipe').onDelete('CASCADE')

    });
}

exports.down = (knex) => {
    return knex.schema.dropTableIfExists('step')
};
