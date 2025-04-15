const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
connectDB()// connect to MongoDB
app.listen(port, () => console.log(`Example app listening on port ${port}!`))