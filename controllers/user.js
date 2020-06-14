const user = require('../models/user')

exports.get = async (req, res) => {
    const { params } = req

    try {
        res.status(200).json({ success: true, data: await user.Get(params.id) })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: err })
    }
}
