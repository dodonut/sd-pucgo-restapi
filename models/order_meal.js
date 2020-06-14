const knex = require('../config/knex').knex

async function AddMealToOrder(orderId, data) {
    for (let meal of data) {
        await knex('order_x_meal').insert({ order_id: orderId, meal_id: meal.id, amount: meal.amount })
    }
}

async function UpdateAmountOfMealsInOrder(orderMealId, newAmount) {
    await knex('order_x_meal').where({ id: orderMealId }).update({ amount: newAmount })
}

async function RemoveMealFromOrder(id) {
    await knex('order_x_meal').where({ id: id }).delete()
}

async function ListMealsFromOrder(orderId) {
    const resp = await knex('order_x_meal').where({ order_id: orderId })
    console.log('RESP', resp)
    let list = []
    for (let orderMeal of resp) {
        const meal = await knex('meal').where({ id: orderMeal.meal_id })
        list.push({
            order_meal_id: orderMeal.id,
            meal: {
                id: meal[0].id,
                name: meal[0].name,
                unit_price: meal[0].price,
                amount: orderMeal.amount
            }
        })
    }
    return list
}

module.exports = {
    AddMealToOrder, RemoveMealFromOrder, ListMealsFromOrder, UpdateAmountOfMealsInOrder
}