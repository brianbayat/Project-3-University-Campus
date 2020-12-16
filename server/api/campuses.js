const router = require('express').Router()
const { Campus, Student} = require('../db')

// Tier 1 : campuses
router.get('/', async (req, res, next) => {
    try {
        const campuses = await Campus.findAll()
        res.json(campuses)
    }
    catch(err){ next(err)}
})

// Tier 2 : single campus
router.get('/:campusId', async (req, res, next) => {
    try{
        const campus = await Campus.findById(req.params.campusId, {
            include:[Student]
        })
        res.json(campus)
    }
    catch(err){next(err)}
})

// Tier 3 : add a campuse
router.post('/', async (req, res, next) => {
    try{
        const campus = await Campus.create(req.body)
        res.json(campus)
    }
    catch(err){ next(err) }
})

// Tier 4 : remove a campuse
router.delete('/:campusId', async (req, res, next) => {
    try{
        await Campus.destroy({
            where : {id : req.params.campusId}
        })
        res.status(204).end()
    }
    catch(err){ next(err) }
})


module.exports = router
