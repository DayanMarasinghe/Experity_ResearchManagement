const mongoose = require('mongoose');

const studentgroupSchema = new mongoose.Schema({
    groupid: {
        type: String,
    },
    groupleader:[{
        studentid: String,
        name: String,
        specialization: String
    }],
    membertwo:[{
        studentid: String,
        name: String,
        specialization: String
    }],
    memberthree: [{
        studentid: String,
        name: String,
        specialization: String
    }],
    memberfour: [{
        studentid: String,
        name: String,
        specialization: String
    }],
    topic:{
        type:String,
    },
    topicApproved:{
        type: String,
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
    }
})

module.exports = mongoose.model('Group', studentgroupSchema)