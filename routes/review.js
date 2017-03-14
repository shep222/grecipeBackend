const router = require('express').Router()
const database = require('../database/reviewAPI')


router.get('/', (req, res) => {
    database.getReview().then((review) => {
        res.send(review)
    })
})

router.get('/:id', (req, res) => {
    database.getSingleReview(req.params.id).then((review) => {
        res.send(review)
    })
})

router.post('/', (req, res) => {
    database.createReview(req.body).then(() => {
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
