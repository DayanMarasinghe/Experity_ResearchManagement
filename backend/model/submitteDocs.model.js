const mongoose = require('mongoose');

const submittedDocScheme = new mongoose.Schema({
    groupid:{
        type: String
    },
    assignment:{
        type: String
    },
    documentLink:{
        type:String
    },
    supervisor:{
        type:String
    }
})

module.exports = mongoose.model('SubmittedDoc', submittedDocScheme);