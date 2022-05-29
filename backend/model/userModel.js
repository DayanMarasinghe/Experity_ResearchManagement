const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    role: {
        type:String,
        required: true
    },
    itnumber: {
        type:String
    },
    specialisation: {
        type:String
    }
})

module.exports=mongoose.model('User',userSchema)