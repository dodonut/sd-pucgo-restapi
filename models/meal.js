const knex = require('../config/knex').knex

async function listMeals(id) {
    return await knex('meal')
}

module.exports = {
    listMeals
}