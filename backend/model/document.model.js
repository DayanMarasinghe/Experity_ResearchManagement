const mongoose = require('mongoose');

const documentScheme = new mongoose.Schema({
    Attributes :{
        type: String
    },
    marks:{
        type: Number
    }
    
})

module.exports = mongoose.model('DocumentMarking', documentScheme);