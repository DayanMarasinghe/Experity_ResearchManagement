const express = require('express');
const Marking = require('../model/marking.model');

const router = express.Router();

/**
 * @router - get all markings
 */
router.get('/', async (req, res) => {
    try {
        const markings = await Marking.find()
        res.json(markings)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

/**
 * @router - create marking
 */
router.post('/', async (req, res) => {
    //creating the JS object
    const marking = new Marking({
        schemaType: req.body.schemaType,
        groupmarkings: req.body.groupmarkings,
        individualmarkings: req.body.individualmarkings
    })

    try {
        const newMarking = await marking.save()
        res.status(201).json(newMarking)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }

})

/**
 * @router - get one marking using marking name
 */
router.get('/getmarking/:schemaType', async (req, res) => {
    let marking
    try {
        marking = await Marking.find({ schemaType: req.params.schemaType })
        if (marking == "") {
            return res.status(404).json({ message: 'Cannot find marking schema' })
        } else {
            res.json(marking)
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

})

module.exports = router;