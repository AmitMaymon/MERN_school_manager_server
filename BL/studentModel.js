const mongoose = require('mongoose')

const gradeSchema = new mongoose.Schema({
    profession: { type: String },
    score: { type: Number }
},{_id:false})

const studentModel = new mongoose.Schema({
    id: { type: Number, required: true,unique:true },
    name: { type: String, required: true },
    faculty: { type: String, required: true },
    // grades: [{
    //     profession: { type: String },
    //     score: { type: Number }
    // },{_id:false}]
    grades: [gradeSchema]


}, { versionKey: false })


module.exports = mongoose.model('students', studentModel)