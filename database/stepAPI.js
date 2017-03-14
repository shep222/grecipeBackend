const db = require('./knex')

module.exports = {
  getStep: () => db('step'),
  createStep: (newItem) => db('step').insert(newItem),
  editStep: (id, newItem) => db('step').where('id', id).update(newItem, 'id'),
  getSingleStep: (id) => db('step').where('id', id),
  deleteStep: (id) => db('step').where('id', id).del().returning('id')
}
