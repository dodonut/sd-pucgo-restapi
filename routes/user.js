const router = require('express').Router()

const user = require("../controllers/user")
const order = require('../controllers/order')

router.get('/:id', user.get)
router.get('/:id/orders', order.get)
router.post('/:id/order', order.create)

module.exports = router;
