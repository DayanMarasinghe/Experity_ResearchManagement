const mongoose = require('mongoose');

const evaluationScheme = new mongoose.Schema({
    groupid: {
        type: String
    },
    evaluationtype:{
        type: String
    },
    groupmark:{
        type:String
    },
    groupleaderid: {
        type: String,
    },
    groupleadermark: {
        type: String,
    },
    membertwoid: {
        type: String,
    },
    membertwomark: {
        type: String,
    },
    memberthreeid: {
        type: String,
    },
    memberthreemark: {
        type: String
    },
    memberfourid: {
        type: String,
    },
    memberfourmark: {
        type: String,
    },
    comments:{
        type: String,
    }
})

module.exports = mongoose.model('Evaluation', evaluationScheme);