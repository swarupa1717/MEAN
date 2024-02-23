// Include mongoose package.
var mongoose = require('mongoose');

// Include Schema from mongoose package.
var schema = mongoose.Schema;

// Create Schema for RegistrationProject table for student.
var studentSchema = new schema({

    firstname:{
        type: String,
        required:true
    },
    lastname:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
})

// Export student schema.
module.exports = mongoose.model('student', studentSchema);