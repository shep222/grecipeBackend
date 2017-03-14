const db = require('./knex')

module.exports = {
  getReview: () => db('review'),
  createReview: (newItem) => db('review').insert(newItem),
  editReview: (id, newItem) => db('review').where('id', id).update(newItem, 'id'),
  getSingleReview: (id) => db('review').where('id', id),
  deleteReview: (id) => db('review').where('id', id).del().returning('id')
}
