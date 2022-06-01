const mongoose = require('mongoose');

const supervisorSchema = new mongoose.Schema({
   supervisor_name : {
       type: String,
       required : true
   },

   specialization : {
       type : String,
       required : true
   },

   email : {
    type : String,
    required : true 
   }

})

module.exports = mongoose.model('Supervisor', supervisorSchema)
