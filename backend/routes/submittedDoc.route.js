const express = require('express');
const submittedDocScheme = require('../model/submitteDocs.model')

const router = express.Router();

/**
 * @router - documetation submission
 */
router.post('/', async (req, res) => {
    //creating the JS object
    const document = new submittedDocScheme({
        groupid: req.body.groupid,
        assignment: req.body.assignment,
        documentLink: req.body.documentLink,
        supervisor: req.body.supervisor,
    })

    try {
        const newDoc = await document.save()
        res.status(201).json(newDoc)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }

})

/**
 * @router - get all the docs for a supervisor
 */
router.get('/supervisor/:supervisor', async (req, res) => {
    let docs;
    try {
        docs = await submittedDocScheme.find({ supervisor: req.params.supervisor })
        if (docs == "") {
            return res.status(404).json({
                message: 'No groups assigned'
            })
        } else {
            res.json(docs)
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = router;