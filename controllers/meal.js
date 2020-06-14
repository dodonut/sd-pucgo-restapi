const meal = require('../models/meal')

exports.get = async (req, res) => {
    try {
        res.status(200).json({ success: true, data: await meal.listMeals() })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: err })
    }
}