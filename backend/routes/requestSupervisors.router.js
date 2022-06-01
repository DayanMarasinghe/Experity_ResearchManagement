const express = require('express');
const router = express.Router();
const Supervisor = require('../model/supervisors.model')

router.get('/', async (req, res) => {
    try {
        const supervisors = await Supervisor.find()
        res.json(supervisors)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.post('/savesupervisors', async (req, res) => {
    //creating the JS object
    const supervisor = new Supervisor({
        supervisor_name: req.body.supervisor_name,
        specialization: req.body.specialization,
        email: req.body.email
    })

    try {
        const newSupervisor = await supervisor.save()
        res.status(201).json(newSupervisor)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }

})




module.exports = router;