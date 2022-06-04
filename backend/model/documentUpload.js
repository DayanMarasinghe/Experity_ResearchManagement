const mongoose = require('mongoose');

const documentuploadschema = new mongoose.Schema({
   document : {
       type : String

   }
})

module.exports = mongoose.model('Documentupload', documentuploadschema);