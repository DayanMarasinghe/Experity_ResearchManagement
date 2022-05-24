const mongoose = require('mongoose');

const markingSchema = new mongoose.Schema({
    schemaType:{
        type:String
    },
    groupmarkings:[{
        area:String,
        highestmarks: String
    }],
    individualmarkings: [{
        area: String,
        highestmarks: String
    }]
})

module.exports = mongoose.model('Marking', markingSchema)