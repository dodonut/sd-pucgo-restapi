require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))

app.use('/user', require('./routes/user'))
app.use('/order', require('./routes/order'))
app.use('/order-meal', require('./routes/orderMeal'))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("API. PORT: ", PORT))