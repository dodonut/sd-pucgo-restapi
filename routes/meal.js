
const router = require('express').Router()

const meal = require('../controllers/meal')

router.get('/', meal.get)

module.exports = router;
