const order = require('../models/order')

exports.get = async (req, res) => {
    const { params, query } = req
    console.log(params, query)

    try {
        let data = null
        if (query.active === "true") {
            data = await order.GetActiveOrdersFromUser(params.id)
        } else {
            data = await order.GetOdersFromUser(params.id)
        }

        res.status(200).json({ success: true, data: data })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: err })
    }
}

exports.create = async (req, res) => {
    const { params } = req

    try {
        res.status(200).json({ success: true, order_id: await order.CreateOrder(params.id) })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: err })
    }
}

exports.closeOrder = async (req, res) => {
    const { params } = req

    try {
        res.status(200).json({ success: true, order_id: await order.CloseOrder(params.id) })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: err })
    }
}