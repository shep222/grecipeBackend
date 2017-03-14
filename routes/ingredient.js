const router = require('express').Router()
const database = require('../database/ingredientAPI')

router.get('/', (req, res) => {
    database.getIngredient().then((ingredient) => {
        res.send(ingredient)
    })
})

router.get('/:id', (req, res) => {
    database.getSingleIngredient(req.params.id).then((ingredient) => {
        res.send(ingredient)
    })
})

router.post('/', (req, res) => {
    database.createIngredient(req.body).then(() => {

        res.sendStatus(201)
    })
})

router.patch('/:id', (req, res) => {
    database.editIngredient(req.params.id, req.body).then((id) => {
        res.send(`Updated Item ${id}`)
    })
})

router.delete('/:id', (req, res) => {
  database.deleteIngredient(req.params.id).then((id) => {
    res.send(`You deleted ${id}`)
  })
})
module.exports = router
