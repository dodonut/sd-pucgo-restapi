const knex = require('../config/knex').knex

async function Get(id) {
    return await knex('user').where({ id: id })
}

module.exports = {
    Get
}