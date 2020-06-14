const order_meal = require('../models/order_meal')

exports.addMeal = async (req, res) => {
    const { params, body } = req
    try {
        await order_meal.AddMealToOrder(params.id, body.meals)
        res.status(200).json({ success: true })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: err })
    }
}

exports.removeMeal = async (req, res) => {
    const { params } = req
    try {
        await order_meal.RemoveMealFromOrder(params.id)
        res.status(200).json({ success: true })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: err })
    }
}

exports.listMealsFromOrder = async (req, res) => {
    const { params } = req
    try {
        res.status(200).json({ success: true, data: await order_meal.ListMealsFromOrder(params.id) })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: err })
    }
}

exports.updateAmount = async (req, res) => {
    const { params, body } = req

    try {
        res.status(200).json({ success: true, data: await order_meal.UpdateAmountOfMealsInOrder(params.id, body.amount) })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: err })
    }
}
