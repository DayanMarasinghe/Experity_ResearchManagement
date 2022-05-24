require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
var cors = require('cors')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', (error) => console.log("Connected to DB.."))

app.use(cors())
app.use(express.json())

//setting routes
const groupRouter = require('./routes/group.router')
app.use('/groups', groupRouter)

app.listen(4000, () => console.log('Server started on port 4000..'))