const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:String,
        required:true,
        trim:true
    },
    classs:{
        type:String,
        required:true,
        trim:true
    },
    rollNo:{
        type:String,
        required:true,
        trim:true
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    pinCode:{
        type:String,
        required:true,
        trim:true
    }
})
const studentData = mongoose.model("studentData", studentSchema)

module.exports = studentData