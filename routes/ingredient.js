const router = require('express').Router()
const database = require('../database/ingredientAPI')
const db = require('../database/recipeAPI.js')
const knex = require('../database/knex');

router.get('/', (req, res) => {
    if (req.query.recipeId) {
        database.getIngredient().where('recipe_id', req.query.recipeId)
            .join('ingredient_recipe', 'ingredient.id', 'ingredient_recipe.ingredient_id')
            .join('recipe', 'ingredient_recipe.recipe_id', 'recipe.id')
            .select('ingredient.*')

            // var ingredients = knex('ingredient_recipe').where('recipe_id', req.query.recipeId)
            //     .join('ingredient', 'ingredient_recipe.ingredient_id', '=', 'ingredient.id');
            // var recipe = db.getRecipe().where('id', req.query.recipeId)
            // Promise.all([
            //         recipe,
            //         ingredients
            //     ])
            .then((ingredient) => {
                res.send(ingredient)
            })
    } else {
        database.getIngredient().then((ingredient) => {
            res.send(ingredient)

        })
    }
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
