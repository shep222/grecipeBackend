const router = require('express').Router()
const database = require('../database/recipeAPI')

router.get('/', (req, res) => {
    database.getRecipe().then((recipe) => {
        res.send(recipe)
    })
})

router.get('/:id', (req, res) => {
    database.getSingleRecipe(req.params.id).then((recipe) => {
        res.send(recipe)
    })
})

router.post('/', (req, res) => {
    database.createRecipe(req.body).then(() => {

        res.sendStatus(201)
    })
})

router.patch('/:id', (req, res) => {
    database.editRecipe(req.params.id, req.body).then((id) => {
        res.send(`Updated Item ${id}`)
    })
})

router.delete('/:id', (req, res) => {
  database.deleteRecipe(req.params.id).then((id) => {
    res.send(`You deleted ${id}`)
  })
})
module.exports = router
