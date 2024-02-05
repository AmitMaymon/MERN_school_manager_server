const studentModel = require('../BL/studentModel')

const getAll = async () => {
    const students = await studentModel.find({})

    return students

}
const getById = async (id) => {
    try {
        const student = await studentModel.find({id:id})
        return student
        
    } catch (error) {
        return error
    }
    

}
const addStudent = async (obj) => {
    const newStudent = new studentModel(obj)
    try {
        let status = await newStudent.save()

        return status
    } catch (error) {
        return error
    }

}

const updateStudent = async (id, obj) => {

    try {
        let status = await studentModel.findOneAndUpdate({ id: id }, obj, { new: true })
        return status

    } catch (error) {

        return error
    }
}
const deleteStudent = async (id) => {
    try {
        let status = await studentModel.findOneAndDelete({ id: id })
        return status

    } catch (error) {
        return error
    }
}


module.exports = { getAll, addStudent, updateStudent, deleteStudent,getById }