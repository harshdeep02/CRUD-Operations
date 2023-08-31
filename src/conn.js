const mongoose = require('mongoose')
// const databaseUrl = process.env.PORT || "mongodb://localhost:27017/SchoolStudentData"

const databaseUrl = process.env.PORT || 'mongodb+srv://harshdeep7887:harsh@123@cluster0.z0ob0jf.mongodb.net/?retryWrites=true&w=majority/SchoolStudentData' || 'mongodb://localhost:27017/SchoolStudentData'


mongoose.connect(databaseUrl,{
    useNewUrlParser: true, useUnifiedTopology: true,  useFindAndModify: false
})
.then(()=>{
    console.log("Connect Sucessfully")
})
.catch(()=>{
    console.log("connection Failed")
})