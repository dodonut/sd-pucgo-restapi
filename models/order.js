const knex = require('../config/knex').knex

async function GetOdersFromUser(id) {
    const orders = await knex('order').where({ user_id: id })
    for (let order of orders) {
        const resp = await knex('order_x_meal').where({ order_id: order.id })
        let allMeals = []
        for (let orderMeal of resp) {
            const meal = await knex('meal').where({ id: orderMeal.meal_id })
            allMeals.push({
                id: meal[0].id,
                name: meal[0].name,
                unit_price: meal[0].price,
                amount: orderMeal.amount
            })
        }
        order.meals = allMeals
    }
    return orders
}

async function CreateOrder(id) {
    return (await knex('order').insert({ user_id: id }).returning('id'))[0]
}

async function GetActiveOrdersFromUser(id) {
    const orders = await knex('order').where({ user_id: id, active: true })
    for (let order of orders) {
        const resp = await knex('order_x_meal').where({ order_id: order.id })
        let allMeals = []
        for (let orderMeal of resp) {
            const meal = await knex('meal').where({ id: orderMeal.meal_id })
            allMeals.push({
                id: meal[0].id,
                name: meal[0].name,
                unit_price: meal[0].price,
                amount: orderMeal.amount
            })
        }
        order.meals = allMeals
    }
    return orders
}

async function CloseOrder(id) {
    await knex('order').update({ active: false }).where({ id: id })
}

module.exports = {
    GetOdersFromUser, CreateOrder, GetActiveOrdersFromUser, CloseOrder
}