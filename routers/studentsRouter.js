const express = require('express')
const studentsBL = require('../BL/studentsBL')

const router = express.Router()

router.get('/', async (req, res) => {
    const students = await studentsBL.getAll()
    res.status(200).json({ students: students })
})
router.get('/:id', async (req, res) => {
    const {id} = req.params
    const student = await studentsBL.getById(id)
    if(student){

        res.status(200).json({ student: student })
    }else{
        
        res.status(404).json({ student: "No student found" })
    }
})

router.post('/', async (req, res) => {
    const student = req.body

    const db_response = await studentsBL.addStudent(student)
    res.status(200).json({ msg: db_response })
})

router.put('/:id', async (req, res) => {
    const {id} = req.params
    const student = req.body


    const db_response = await studentsBL.updateStudent(id, student)
    res.status(200).json({ msg: db_response })


})
router.delete('/:id', async (req, res) => {
    const {id} = req.params
    const db_response = await studentsBL.deleteStudent(id)
    res.status(200).json({ student_deleted: db_response })
})



module.exports = router