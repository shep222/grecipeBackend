const router = require('express').Router()
const database = require('../database/stepAPI')

router.get('/', (req, res) => {
  if (req.query.recipeId) {
    database.getStep().where('recipe_id', req.query.recipeId)
    .join('recipe', 'recipe.id', ' step.recipe_id')
    .select('step.*')
    .then((step) => {
      res.send(step)
    })
  } else {
    database.getStep().then((step) => {
      res.send(step)
    })
  }
})

router.get('/:id', (req, res) => {
    database.getSingleStep(req.params.id).then((step) => {
        res.send(step)
    })
})

router.post('/', (req, res) => {
    database.createStep(req.body).then(() => {
        res.sendStatus(201)
    })
})

router.patch('/:id', (req, res) => {
    database.editStep(req.params.id, req.body).then((id) => {
        res.send(`Updated Item ${id}`)
    })
})

router.delete('/:id', (req, res) => {
  database.deleteStep(req.params.id).then((id) => {
    res.send(`You deleted ${id}`)
  })
})
module.exports = router
