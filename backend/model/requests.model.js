const mongoose = require('mongoose');

const requestScheme = new mongoose.Schema({
    groupid: {
        type: String
    },
    topic: {
        type: String
    },
    description: {
        type: String
    },
    requestedSupervisor: {
        type: String
    },
    requestedCosupervisor: {
        type: String
    },
    stateSupervisor:{
        type:String
    },
    stateCoSupervisor: {
        type: String
    }
})

module.exports = mongoose.model('Requests', requestScheme);