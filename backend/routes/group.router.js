const express = require('express');
const Group = require('../model/studentgroup.model');

const router = express.Router();

/**
 * @router - get all groups
 */
router.get('/', async(req,res) => {
    try {
        const groups = await Group.find()
        res.json(groups)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

/**
 * @router - create group
 */
router.post('/', async(req, res) => {
    //creating the JS object
    const group = new Group({
        groupid: req.body.groupid,
        groupleader: req.body.groupleader,
        membertwo: req.body.membertwo,
        memberthree: req.body.memberthree,
        memberfour: req.body.memberfour,
        topic: req.body.topic,
        topicApproved: req.body.topicApproved,
        researchGroup: req.body.researchGroup,
        researchArea: req.body.researchArea,
        supervisor: req.body.supervisor,
        cosupervisor: req.body.cosupervisor
    })

    try{
        const newGroup = await group.save()
        res.status(201).json(newGroup)
    } catch(err){
        res.status(400).json({
            message: err.message
        })
    }

})

/**
 * @router - get all the groups for a supervisor
 */
router.get('/supervisor/:supervisor', async(req, res) => {
    let groups;
    try {
        groups = await Group.find({ supervisor : req.params.supervisor})
        if(groups == ""){
            return res.status(404).json({
                message: 'No groups assigned'
            })
        } else {
            res.json(groups)
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

/**
 * @router - get all the groups for a supervisor
 */
router.get('/cosupervisor/:cosupervisor', async (req, res) => {
    let groups;
    try {
        groups = await Group.find({ cosupervisor: req.params.cosupervisor })
        if (groups == "") {
            return res.status(404).json({
                message: 'No groups assigned'
            })
        }else{
            res.json(groups)
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = router;