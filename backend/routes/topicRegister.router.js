const express = require("express");
const router = express.Router();
const TopicRegister = require("../model/topicRegister.model");
const Creategroup = require("../model/createGroups.model");
const studentgroup = require("../model/studentgroup.model");
const users = require("../model/userModel");

/**
 * @router - create topics
 */
// router.post('/', async(req, res) => {
//     //creating the JS object
//     const TopicRegisters = new TopicRegister({
//         groupid: req.body.groupid,
//         topic: req.body.topic,
//         researchGroup: req.body.researchGroup,
//         researchArea: req.body.researchArea,
//         supervisor: req.body.supervisor,
//         cosupervisor: req.body.cosupervisor,
//         leadername : req.body.leadername,
//         itnumber : req.body.itnumber,
//         email : req.body.email

//     })

//     try{
//         const regtopic = await TopicRegisters.save()
//         res.status(201).json(regtopic)
//     } catch(err){
//         res.status(400).json({
//             message: err.message
//         })
//     }

// })

router.post("/creategroup", async (req, res) => {
  //creating the JS object
  console.log("hiiii");
  const creategroup = new Creategroup({
    groupid: req.body.groupid,
    members: req.body.members,
  });

  try {
    const newGroup = await creategroup.save();
    res.status(201).json(newGroup);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

router.get("/getstudents", async (req, res) => {
  console.log("hiiii to get");
  try {
    const groups = await Creategroup.find();
    res.json(groups);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/getstudents/:id", async (req, res) => {
  console.log("hiiii to get");
  try {
    const id = req.params.id;
    groups = await studentgroup.findById({ _id: id });

    const memberids = groups.members;
    const membersobj = [];

    for (let i = 0; memberids.length > i; i++) {
      let id = memberids[i];
      student = await users.findById({ _id: id });

       membersobj.push(student);
    }

    const results =  {
      id: groups._id,
      groupid: groups.groupid,
      members: membersobj,
    };
    res.json(results);

     res.json(groups);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/students", async (req, res) => {
  console.log("hiiii to get all");
  try {
    groups = await studentgroup.find();
    res.json(groups.members);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// router.get getSubject(id){

//     try{

//     constresSub =await SubjectModel.findById({_id:id}).populate('courses','name');

//     console.log(resSub);

//     returnresSub;

//     }catch(e) {

//     }

//     }

module.exports = router;
