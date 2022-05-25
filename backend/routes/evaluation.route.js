const express = require('express');
const Evaluation = require('../model/evaluation.model')

const router = express.Router();

/**
 * @router - get all evaluations
 */
router.get('/', async (req, res) => {
    try {
        const evaluations = await Evaluation.find()
        res.json(evaluations)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

/**
 * @router - add an evaluation
 */
router.post('/', async (req, res) => {
    //creating the JS object
    const evaluation = new Evaluation({
        evaluationType: req.body.evaluationType,
        groupIdentifier: req.body.groupIdentifier,
        groupid: req.body.groupid,
        groupmarks: req.body.groupmarks,
        groupleader: req.body.groupleader,
        membertwo: req.body.membertwo,
        memberthree: req.body.memberthree,
        memberfour: req.body.memberfour
    })

    try {
        const newEvaluation = await evaluation.save()
        res.status(201).json(newEvaluation)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }

})
module.exports = router;