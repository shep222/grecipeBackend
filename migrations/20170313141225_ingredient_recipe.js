exports.up = (knex) => {
    return knex.schema.createTable('ingredient_recipe', (ingredient_recipe) => {
        ingredient_recipe.integer('recipe_id').references('id').inTable('recipe').onDelete('CASCADE')
        ingredient_recipe.integer('ingredient_id').references('id').inTable('ingredient').onDelete('CASCADE')
        ingredient_recipe.varchar('quantity')
    });
}

exports.down = (knex) => {
    return knex.schema.dropTableIfExists('ingredient_recipe')
};
