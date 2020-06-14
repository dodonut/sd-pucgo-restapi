
const router = require('express').Router()

const order_meal = require('../controllers/order_meal')

router.delete('/:id', order_meal.removeMeal)
router.put('/:id', order_meal.updateAmount)

module.exports = router;
