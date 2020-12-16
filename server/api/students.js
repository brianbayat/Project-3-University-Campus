const router = require('express').Router()
const {Campus, Student} = require('../db')

Tier 1 : students
router.get('/', async () => {
    try {
        const students = await Student.findAll()
        res.json(students)
    }
    catch(err){ next(err) }
})


// Tier 2 : single student
router.get('/:studentId', async (req, res, next) => {
    try {
        const student = await Student.findById(req.params.studenId, {
            include: [Campus]
        })
        res.json(student)
    }
})


// Tier 3 : add a student
router.post('/', async (req, res, next) => {
    try {
        const student = await Student.create(req.body)
        res.json(student)
    }
    catch(err){ next(err) }
})


// Tier 4 : remove a student
router.delete('/:studentId', async (req, res, next) => {
    try{
        await Student.destroy({where: {id: req.params.studentId}})
        res.status(204).end()
    }
    catch(err){ next(err) }
})


module.exports = router

