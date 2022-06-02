const express = require('express');
const Presentation = require('../model/presentation.model')
const Viva = require('../model/viva.model')
const Document = require('../model/document.model')
const User = require('../model/userModel')

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

// router.put('/userUpdate/:id', async(req, res) => {
//     //check the relevent feild to be updated
   
//     const userID = req.params.id;

//     try {
//       //update the JS object
//         const userOB = new User({
//         name: req.body.name,
//         role: req.body.role,
//         specialisation: req.body.specialisation,
        
//     })
   
//       const user = await User.updateMany({"_id":userID}, [ {$set : { "name": userOB.name, "role":userOB.role, "specialisation": userOB.specialisation} } ]);
  
//     } catch (err) {
//       res.status(400).json({message: err.message})
//     }
    
//   })

//////////////////////////////

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




  
//   consteditResearchDetails = async (req, res) => {

//     letid = req.params.id;
    
//     letdataSet =req.body;
    
//     console.log("ID:",id);
    
//     console.log("Data:",dataSet);
    
//     awaitResearch.findByIdAndUpdate(id,dataSet)
    
//     .then((data)=> {
    
//     console.log(data);
    
//     res.status(200).send({
    
//     data: data,
    
//     });
    
//     })




 router.delete('/deluser/:id', async(req, res, ) =>  {

    console.log("Hit delete User")
    const userID = req.params.id;
    //await User.deleteOne( {"_id": userID } )
    await User.findOneAndDelete(userID)
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

  //Crete document marking scheme
  router.post('/document', async (req, res) => {
    //creating the JS object
    const document = new Document({
        Attributes: req.body.Attributes,
        marks: req.body.marks,
        
    })

    try {
        const Newdocument = await document.save()
        res.status(201).json(Newdocument)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }

})

  //Crete viva marking scheme
  router.post('/viva', async (req, res) => {
    //creating the JS object
    const viva = new Viva({
        Attributes: req.body.Attributes,
        marks: req.body.marks,
        
    })

    try {
        const Newviva = await viva.save()
        res.status(201).json(Newviva)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }

})

//update marking scheme

router.patch('/updateviva/:id', async (req, res) => {
    
    const ID = req.params.id;

    try {
    //update the JS object
    const viva = new Viva({
        Attributes: req.body.Attributes,
        marks: req.body.marks,
        
    })

    const updateviva = await Viva.updateMany({"_id":ID}, [ {$set : { "Attributes": viva.Attributes, "marks":viva.marks} } ]);

    } catch (err) {
    res.status(400).json({message: err.message})
    }

})

router.patch('/updatedocument/:id', async (req, res) => {
    
    const ID = req.params.id;

    try {
    //update the JS object
    const document = new Document({
        Attributes: req.body.Attributes,
        marks: req.body.marks,
        
    })

    const updatedocument = await Document.updateMany({"_id":ID}, [ {$set : { "Attributes": document.Attributes, "marks":document.marks} } ]);

    } catch (err) {
    res.status(400).json({message: err.message})
    }

})

router.patch('/updatepresenatation/:id', async (req, res) => {
    
    const ID = req.params.id;

    try {
    //update the JS object
    const presenatation = new Presentation({
        Attributes: req.body.Attributes,
        marks: req.body.marks,
        
    })

    const updatePresentation = await Presentation.updateMany({"_id":ID}, [ {$set : { "Attributes": presenatation.Attributes, "marks":presenatation.marks} } ]);

    } catch (err) {
    res.status(400).json({message: err.message})
    }

})


/**
 * @router - get all Marking
 */

//get presentation marking data
 router.get('/getpresentation', async (req, res) => {
    try {
        const presenatation = await Presentation.find()
        res.json(presenatation)
        console.log(presenatation)
    } catch (error) {
        res.status(500).json({
            message: error.message
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