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
        groupid: req.body.groupid,
        evaluationtype: req.body.evaluationtype,
        groupmark: req.body.groupmark,
        groupleaderid: req.body.groupleaderid,
        groupleadermark: req.body.groupleadermark,
        membertwoid: req.body.membertwoid,
        membertwomark: req.body.membertwomark,
        memberthreeid: req.body.memberthreeid,
        memberthreemark: req.body.memberthreemark,
        memberfourid: req.body.memberfourid,
        memberfourmark: req.body.memberfourmark,
        comments: req.body.comments,
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