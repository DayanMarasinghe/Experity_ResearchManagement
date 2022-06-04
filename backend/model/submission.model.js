const mongoose = require('mongoose');

const submissionScheme = new mongoose.Schema({
    submissionname:{
        type: String
    },
    description:{
        type: String
    },
    deadline: {
        type: String
    },
    document:{
        type: String
    },
    template:{
        type: String
    },

    markingscheme:{
        type: String
    }
})

module.exports = mongoose.model('Submission', submissionScheme)