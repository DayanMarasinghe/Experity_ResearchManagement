const mongoose = require('mongoose');

const topicregistrationSchema = new mongoose.Schema({
    groupid: {
        type: String,
    },
    topic:{
        type:String,
    },
    researchGroup:{
        type:String
    },
    researchArea:{
        type: String
    },
    supervisor:{
        type: String
    },
    cosupervisor:{
        type: String
    },

    leadername : {
        type : String
    },

    itnumber : {
        type : String
    },

    email : {
        type : String
    }
})

module.exports = mongoose.model('TopicRegister', topicregistrationSchema)
