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

//request routers
const requestRouter = require('./routes/requests.route')
app.use('/requests', requestRouter)

const panelMarkingRouter = require('./routes/pmMarkingRoute')
app.use('/panelMarking',panelMarkingRouter)

const documentUploadRouter = require('./routes/documentUplaod.route')
app.use('/documentupload', documentUploadRouter)


const markingSchemeRouter = require('./routes/markingscheme.router')
app.use('/markings', markingSchemeRouter)

const submittedDocRouter = require('./routes/submittedDoc.route')
app.use('/submitted', submittedDocRouter)

app.listen(4000, () => console.log('Server started on port 4000..'))