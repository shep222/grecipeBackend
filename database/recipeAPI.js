const db = require('./knex')

module.exports = {
  getRecipe: () => db('recipe'),


  createRecipe: (newItem) => db('recipe').insert(newItem),



  editRecipe: (id, newItem) => db('recipe').where('id', id).update(newItem, 'id'),
  getSingleRecipe: (id) => db('recipe').where('id', id),
  deleteRecipe: (id) => db('recipe').where('id', id).del().returning('id'),
  addIngredient: (recipeId, ingredientId, quantity) => db('ingredient_recipe').insert({recipe_id: recipeId, ingredient_id:ingredientId, quantity: quantity}),
  removeIngredient: (recipeId, ingredientId) => db('ingredient_recipe').where('recipe_id', recipeId).andWhere('ingredient_id', ingredientId).del().returning('recipe_id'),
  editQuantity: (recipeId, ingredientId, quantity) => db('ingredient_recipe').where('recipe_id', recipeId).andWhere('ingredient_id', ingredientId).update({recipe_id: recipeId, ingredient_id:ingredientId, quantity: quantity}),

}
