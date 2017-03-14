const db = require('./knex')

module.exports = {
  getIngredient: () => db('ingredient'),
  createIngredient: (newItem) => db('ingredient').insert(newItem),
  editIngredient: (id, newItem) => db('ingredient').where('id', id).update(newItem, 'id'),
  getSingleIngredient: (id) => db('ingredient').where('id', id),
  deleteIngredient: (id) => db('ingredient').where('id', id).del().returning('id')
}
