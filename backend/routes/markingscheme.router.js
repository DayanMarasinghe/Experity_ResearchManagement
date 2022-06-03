const express = require('express')
const router = express.Router()
const VivaMarking = require('../model/viva.model')
const DocumentMarking = require('../model/document.model')

/**
 * @router - get all viva markings
 */
router.get('/viva', async(req, res) => {
    try{
        const viva = await VivaMarking.find()
        res.json(viva)
    } catch(error){
        res.status(500).json({
            message: error.message
        })
    }
})

/**
 * @router - get all document markings
 */
router.get('/document', async (req, res) => {
    try {
        const document = await DocumentMarking.find()
        res.json(document)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = router