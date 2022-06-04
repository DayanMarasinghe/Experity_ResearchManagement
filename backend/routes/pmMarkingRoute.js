const express = require('express')
const router = express.Router()
const presentation = require('../model/presentation.model')
const group = require('../model/studentgroup.model')
const Requests = require('../model/requests.model');


router.get('/markingScheme', async(req, res) => {
    let scheme
    try {
        scheme = await presentation.find()
        if (scheme == "") {
            return res.status(404).json({ message: 'Empty' })
        }else{
            res.json(scheme)
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    
})

router.get('/requests/:user', async(req, res) => {
    let scheme
    try {
        scheme = await Requests.find({panelmember:req.params.user})
        if (scheme == "") {
            return res.status(404).json({ message: 'Empty' })
        }else{
            res.json(scheme)
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    
})

router.get('/group/:user',async(req,res)=>{
    let grp
    try {
        grp = await group.find({panelmember:req.params.user})
        if (grp == "") {
            return res.status(404).json({ message: 'Empty' })
        }else{
            res.json(grp)
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

router.patch('/pmcomment/:groupid',async(req, res) => {    
    try{
         await Requests.findOneAndUpdate({groupid : req.params.groupid},
            {
                panelmembercomment : req.body.panelmembercomment
            })
        res.json({message:"done"})  
    }catch(error){
        res.status(400).json({message: err.message})
    }
})
    

module.exports = router
