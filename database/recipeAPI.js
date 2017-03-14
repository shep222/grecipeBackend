const db = require('./knex')

module.exports = {
  getRecipe: () => db('recipe'),
  createRecipe: (newItem) => db('recipe').insert(newItem),
  editRecipe: (id, newItem) => db('recipe').where('id', id).update(newItem, 'id'),
  getSingleRecipe: (id) => db('recipe').where('id', id),
  deleteRecipe: (id) => db('recipe').where('id', id).del().returning('id'),
  // getFullRecipe: (id) => db('recipe')
}
