const express = require('express');
const Presentation = require('../model/presentation.model')
const Viva = require('../model/viva.model')
const Document = require('../model/document.model')
const User = require('../model/userModel')
const Groups = require('../model/studentgroup.model')
const Submission = require('../model/submission.model')

const router = express.Router();

/**
 * @router - get all Users
 */
router.get('/allUser', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
        console.log(users)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

/**
 * @router - get all groups
 */
 router.get('/adgroups', async (req, res) => {
    try {
        const group = await Groups.find()
        res.json(group)
        console.log(group)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

/**
 * @router - get all groups
 */
 router.get('/adpanel', async (req, res) => {
    try {
        const user = await User.find({ role: 'Panel Member'})
        res.json(user)
        console.log(user)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.patch('/addpanel/:id/:name', async(req, res) => {
    //check the relevent feild to be updated
    try {
      const groupid = req.params.id;
      const usename = req.params.name;
      let obj = {panelmember: usename}
      const group = await Groups.findByIdAndUpdate(groupid,obj);
    res.status(200).json({
        message: "Success"
    })
    } catch (error) {
      res.status(400).json({message: err.message})
    }
    
  }) 




//Crete submission marking scheme
router.post('/submission', async (req, res) => {
    //creating the JS object
    const submission = new Submission({
        submissionname: req.body.submissionname,
        description: req.body.description,
        deadline: req.body.deadline,
        document: req.body.document,
        template: req.body.template,
        markingscheme: req.body.markingscheme
        
    })

    try {
        const newsubmission = await submission.save()
        res.status(201).json(newsubmission)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }

})



/**
 * @router - get all submissions
 */
 router.get('/getsubmission', async (req, res) => {
    try {
        const  submission = await Submission.find()
        res.json(submission)
        console.log(submission)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.delete('/delsubmission/:id', async(req, res, ) =>  {

    console.log("Hit delete Submission")
    const subID = req.params.id;
    
    await Submission.findOneAndDelete(subID)
    console.log("delete: req.body: " + JSON.stringify(req.body));
    res.json(req.body);
  })







/**
 * @router - filtered users
 */
router.get('/usercategory/:filter', async (req, res) => {

    const filter = req.params.filter;

    try {
        const users = await User.find({role: filter})
        res.json(users)
        console.log(users) 
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.get('/userup/:id', async (req, res) => {

    const ID = req.params.id;

    try {
        const users = await User.find({"_id": ID})
        res.json(users)
        console.log(users) 
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})



  router.put('/userUpdate/:id', async(req, res) => {
    //check the relevent feild to be updated
    
    console.log("User Update function ");

    let id = req.params.id;

    let dataSet =req.body;

    console.log("ID:",id);

    console.log("Data:",dataSet);

    await User.findByIdAndUpdate(id,dataSet)

    .then((data)=> {

        console.log(data);

        res.status(200).send({

        data: data,

    });

    })

    .catch((error)=> {

    res.status(500).send({

    error: error.message,

    });

});

    
  })



 router.delete('/deluser/:id', async(req, res, ) =>  {

    console.log("Hit delete User")
    const userID = req.params.id;
    //await User.deleteOne( {"_id": userID } )
    await User.findByIdAndDelete(userID)
    console.log("delete: req.body: " + JSON.stringify(req.body));
    res.json(req.body);
  })

  //Crete presentation marking scheme
  router.post('/presenatation', async (req, res) => {
    //creating the JS object
    const presentation = new Presentation({
        Attributes: req.body.Attributes,
        marks: req.body.marks,
        
    })

    try {
        const Newpresentation = await presentation.save()
        res.status(201).json(Newpresentation)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }

})

 


//get Viva marking data
router.get('/getviva', async (req, res) => {
    try {
        const viva = await Viva.find()
        res.json(viva)
        console.log(viva)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

//get Document marking data
router.get('/getdocument', async (req, res) => {
    try {
        const document = await Document.find()
        res.json(document)
        console.log(document)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})





module.exports = router;