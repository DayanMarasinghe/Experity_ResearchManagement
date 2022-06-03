const mongoose = require('mongoose');

const supervisorSchema = new mongoose.Schema({
    groupid: {
        type: String,
    },

    topic:{
        type:String
    },

    reqsupervisors: [
        {
          type: mongoose.Schema.Types.ObjectId,
    
          require: false,
    
          ref: "users",
        },
    ],

    reqcosupervisors: [
        {
          type: mongoose.Schema.Types.ObjectId,
    
          require: false,
    
          ref: "users",
        },
    ],

})

module.exports = mongoose.model('RequestSupervisor', supervisorSchema)
