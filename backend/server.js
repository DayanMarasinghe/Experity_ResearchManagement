require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', (error) => console.log("Connected to DB.."))

app.use(express.json())


app.listen(4000, () => console.log('Server started on port 4000..'))