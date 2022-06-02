const mongoose = require('mongoose');

const presentationScheme = new mongoose.Schema({
    Attributes :{
        type: String
    },
    marks:{
        type: Number
    }
    
})

module.exports = mongoose.model('PresentationMarking', presentationScheme);