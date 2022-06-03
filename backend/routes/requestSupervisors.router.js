const express = require('express');
const router = express.Router();
const Supervisor = require('../model/requestSupervisors.model')


router.post("/reqsupervisors", async (req, res) => {
    //creating the JS object
    console.log("hiiii");
    const createsupers = new Supervisor({
      groupid: req.body.groupid,
      topic : req.body.topic,
      reqsupervisors: req.body.reqsupervisors,
      reqcosupervisors : req.body.reqcosupervisors
    });
  
    try {
      const newSuper = await createsupers.save();
      res.status(201).json(newSuper);
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  });

  




module.exports = router;