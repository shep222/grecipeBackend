const router = require('express').Router()
const database = require('../database/userAPI')


router.get('/', (req, res) => {
    database.getUser().then((user) => {
        res.send(user)
    })
})

router.get('/:id', (req, res) => {
    database.getSingleUser(req.params.id).then((user) => {
        res.send(user)
    })
})

router.post('/', (req, res) => {
    database.createUser(req.body).then(() => {
        res.sendStatus(201)
    })
})

router.patch('/:id', (req, res) => {
    database.editUser(req.params.id, req.body).then((id) => {
        res.send(`Updated Item ${id}`)
    })
})

router.delete('/:id', (req, res) => {
  database.deleteUser(req.params.id).then((id) => {
    res.send(`You deleted ${id}`)
  })
})
module.exports = router
