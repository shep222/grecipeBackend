const db = require('./knex')

module.exports = {
  getUser: () => db('user'),
  createUser: (newItem) => db('user').insert(newItem),
  editUser: (email, newItem) => db('user').where('email', email).update(newItem, 'email'),
  getSingleUser: (email) => db('user').where('email', email),
  deleteUser: (email) => db('user').where('email', email).del().returning('email')
}
