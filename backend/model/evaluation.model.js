const mongoose = require('mongoose');

const evaluationScheme = new mongoose.Schema({
    evaluationType:{
        type: String
    },
    groupIdentifier:{
        type: String
    },
    groupid:{
        type: String
    },
    groupmarks:[{
        area: String,
        marks: String
    }],
    groupleader:[{
        area:String,
        marks:String
    }],
    membertwo: [{
        area: String,
        marks: String
    }],
    memberthree:[{
        area: String,
        marks: String
    }],
    memberfour: [{
        area: String,
        marks: String
    }],
})

module.exports = mongoose.model('Evaluation', evaluationScheme);