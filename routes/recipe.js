const router = require('express').Router()
const database = require('../database/recipeAPI')

router.get('/', (req, res) => {
  if (req.query.ingredientId) {
    database.getRecipe()
    .join('ingredient_recipe','ingredient_recipe.recipe_id' , 'recipe.id')
    .join('ingredient','ingredient_recipe.ingredient_id', 'ingredient.id')
    .where('ingredient.id', req.query.ingredientId)

    // .select('ingredient_recipe.*', 'ingredient.*')
     .select('recipe.*')
    .then((recipe) => {
      res.send(recipe)
    })
  } else {
    database.getRecipe()
    .join('user','user_id', 'user.email')
    .select('recipe.*', 'user.postName')
    .then((recipe) => {
      res.send(recipe)
    })
  }
})


router.get('/:id', (req, res) => {
    database.getSingleRecipe(req.params.id).then((recipe) => {
        res.send(recipe)
    })
})

router.post('/:id/associateIngredient/:ingredientId', (req, res) => {
  database.addIngredient(req.params.id, req.params.ingredientId, req.body.quantity)
  .then((ingredient_recipe) => {
    res.send(ingredient_recipe)
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

router.patch('/:id/associateIngredient/:ingredientId', (req, res) => {
  database.editQuantity(req.params.id, req.params.ingredientId, req.body.quantity)
  .then((id) => {
    res.send(`Updated Item ${id} quantity`)
  })
})

router.delete('/:id', (req, res) => {
    database.deleteRecipe(req.params.id).then((id) => {
        res.send(`You deleted ${id}`)
    })
})

router.delete('/:id/associateIngredient/:ingredientId', (req, res) => {
  database.removeIngredient(req.params.id, req.params.ingredientId)
  .then((ingredient_recipe) => {
    res.send(ingredient_recipe)
  })
})



module.exports = router
