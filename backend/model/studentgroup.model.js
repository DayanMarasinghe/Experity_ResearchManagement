const mongoose = require('mongoose');

const studentgroupSchema = new mongoose.Schema({
    groupid: {
        type: String,
    },
    topic:{
        type: String,
    },
    supervisor:{
        type:String,
    },
    cosupervisor:{
        type:String,
    },
    groupleaderid:{
        type: String,
    },
    groupleadername:{
        type:String,
    },
    membertwoid:{
        type:String,
    },
    membertwoname:{
        type:String,
    },
    memberthreeid:{
        type:String,
    },
    memberthreename:{
        type:String
    },
    memberfourid:{
        type:String,
    },
    memberfourname:{
        type:String,
    },
    panelmember:{
        type:String
    }

})

module.exports = mongoose.model('Group', studentgroupSchema)