const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 7050
const cors = require('cors')
const recipe = require('./routes/recipe')
const review = require('./routes/review')
const step = require('./routes/step')
const ingredient = require('./routes/ingredient')
const user = require('./routes/user')


app.use(cors())
// app.use(cors({origin: 'https://grecipesfrontend.firebaseapp.com/'}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/recipe', recipe)
app.use('/review', review)
app.use('/step', step)
app.use('/ingredient', ingredient)
app.use('/user', user)



app.listen(PORT, function () {
  console.log("Your RECIPE SITE is running on port:" + PORT);
})
