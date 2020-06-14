
const router = require('express').Router()

const order_meal = require('../controllers/order_meal')
const order = require('../controllers/order')

router.post('/:id', order_meal.addMeal)
router.put('/:id/order/close', order.closeOrder)
router.get('/:id', order_meal.listMealsFromOrder)


module.exports = router;
