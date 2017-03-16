const db = require('./knex')

module.exports = {
  getUser: () => db('user'),




  createUser: (email) => db('user').select('email').where('email', email)
  .then(user => {
    if (user[0]=== undefined){
       return db('user').insert({email: email})
    } 
  }),







  editUser: (email, newItem) => db('user').where('email', email).update(newItem, 'email'),
  getSingleUser: (email) => db('user').where('email', email),
  deleteUser: (email) => db('user').where('email', email).del().returning('email')
}
