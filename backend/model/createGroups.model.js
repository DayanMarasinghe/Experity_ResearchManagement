const mongoose = require('mongoose');

const creategroupschema = new mongoose.Schema({
    groupid: {
        type: String,
    },
   
    groupleader : {
        type : String,
    },

    itnumber : {
        type : String,
    },

    email : {
        type : String,
    },

    topic:{
        type:String
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
    },

    members: [
        {
          type: mongoose.Schema.Types.ObjectId,
    
          require: false,
    
          ref: "users",
        },
    ],

   
})

module.exports = mongoose.model('Creategroup', creategroupschema)