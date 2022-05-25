const express = require('express');
const router = express.Router();
const TopicRegister = require('../model/topicRegister.model')


/**
 * @router - create topics
 */
router.post('/', async(req, res) => {
    //creating the JS object
    const TopicRegisters = new TopicRegister({
        groupid: req.body.groupid,
        topic: req.body.topic,
        researchGroup: req.body.researchGroup,
        researchArea: req.body.researchArea,
        supervisor: req.body.supervisor,
        cosupervisor: req.body.cosupervisor,
        leadername : req.body.leadername,
        itnumber : req.body.itnumber,
        email : req.body.email

    })

    try{
        const regtopic = await TopicRegisters.save()
        res.status(201).json(regtopic)
    } catch(err){
        res.status(400).json({
            message: err.message
        })
    }

})


module.exports = router;