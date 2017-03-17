const router = require('express').Router()
const database = require('../database/reviewAPI')
const db = require('../database/userAPI.js')


router.get('/', (req, res) => {
  if (req.query.recipeId) {
    database.getReview().where('recipe_id', req.query.recipeId)
    .join('recipe', 'recipe.id', ' review.recipe_id')
    .join('user','recipe.user_id', 'user.email')
    .select('review.*')
    .then((review) => {
      res.send(review)
    })
  } else {
    database.getReview()
    .join('user','user_id', 'user.email')
    .then((review) => {
      res.send(review)
    })
  }
})


router.get('/:id', (req, res) => {
    database.getSingleReview(req.params.id).then((review) => {
        res.send(review)
    })
})

// router.post('/', (req, res) => {
//     database.createReview(req.body).then(() => {
//         res.sendStatus(201)
//     })
// })

router.post('/', (req, res) => {
    db.createUser(req.body.user_id)
        .then(() => {
           return database.createReview(req.body)
        })
        .then(() => {
            res.sendStatus(201)
        })
})

router.patch('/:id', (req, res) => {
    database.editReview(req.params.id, req.body).then((id) => {
        res.send(`Updated Item ${id}`)
    })
})

router.delete('/:id', (req, res) => {
  database.deleteReview(req.params.id).then((id) => {
    res.send(`You deleted ${id}`)
  })
})
module.exports = router
