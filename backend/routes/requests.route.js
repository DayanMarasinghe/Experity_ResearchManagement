const express = require('express');
const Requests = require('../model/requests.model');

const router = express.Router();

/**
 * @router - create request
 */
router.post('/', async (req, res) => {
    //creating the JS object
    const request = new Requests({
        groupid: req.body.groupid,
        topic: req.body.topic,
        description: req.body.description,
        requestedSupervisor: req.body.requestedSupervisor,
        requestedCosupervisor: req.body.requestedCosupervisor,
        stateSupervisor: req.body.stateSupervisor,
        stateCoSupervisor: req.body.stateCoSupervisor,
    })

    try {
        const newRequest = await request.save()
        res.status(201).json(newRequest)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }

})

/**
 * @router - get all the requests for a supervisor
 */
router.get('/supervisor/:supervisor', async (req, res) => {
    let requests;
    try {
        requests = await Requests.find({ supervisor: req.params.requestedSupervisor })
        if (requests == "") {
            return res.status(404).json({
                message: 'No reqests'
            })
        } else {
            res.json(requests)
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

/**
 * @function getRequest - checks if the relevent request exists in the DB
 * @params req, res, next
 */
async function getRequest(req, res, next) {
    let reqest

    try {
        reqest = await Requests.findById(req.params.id)
        if (reqest == "") {
            return res.status(404).json({
                message: 'Request not found'
            })
        }
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }

    res.reqest = reqest

    next()
}

/**
 * @router - update request state
 */
router.patch('/:id', getRequest,async(req, res) => {
    if (req.body.stateSupervisor != null) {
        res.reqest.stateSupervisor = req.body.stateSupervisor
    }
    try {
        const updateRequest = await res.reqest.save()
        res.json(updateRequest)
    } catch (error) {
        res.status(400).json({updateRequest})
    }
})

module.exports = router;