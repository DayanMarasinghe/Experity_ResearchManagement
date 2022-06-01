const mongoose = require('mongoose');

const vivaScheme = new mongoose.Schema({
    Attributes :{
        type: String
    },
    marks:{
        type: Number
    }
    
})

module.exports = mongoose.model('VivaMarking', vivaScheme);