const mongoose = require('mongoose')

const studentModel = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    faculty: { type: String, required: true },
    grades: [{
        profession: { type: String },
        score: { type: Number }
    }
    ]


}, { versionKey: false, })


module.exports = mongoose.model('students', studentModel)