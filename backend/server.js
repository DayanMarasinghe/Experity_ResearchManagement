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

const topicRegisterRouter = require('./routes/topicRegister.router')
app.use('/topicregister', topicRegisterRouter)

const supervisorRouter = require('./routes/requestSupervisors.router')
app.use('/supervisors', supervisorRouter)

const markingRouter = require('./routes/marking.rotuer')
app.use('/markings', markingRouter)

const evaluationRouter = require('./routes/evaluation.route')
app.use('/evaluations', evaluationRouter)

const userRouter = require('./routes/userRoutes')
app.use('/users',userRouter)

//admin routers
const adminUserRouter = require('./routes/adminUser.route')
app.use('/adminUsers',adminUserRouter)

const panelMarkingRouter = require('./routes/pmMarkingRoute')
app.use('/panelMarking',panelMarkingRouter)

app.listen(4000, () => console.log('Server started on port 4000..'))