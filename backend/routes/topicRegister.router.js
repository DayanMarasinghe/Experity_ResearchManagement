const express = require("express");
const router = express.Router();
const TopicRegister = require("../model/topicRegister.model");
const Creategroup = require("../model/createGroups.model");
const studentgroup = require("../model/studentgroup.model");
const users = require("../model/userModel");

/**
 * @router - create topics
 */
router.post('/registertopic', async(req, res) => {
    //creating the JS object
    const TopicRegisters = new Creategroup({
        groupid: req.body.groupid,
        topic: req.body.topic,
        researchGroup: req.body.researchGroup,
        researchArea: req.body.researchArea,
        supervisor: req.body.supervisor,
        cosupervisor: req.body.cosupervisor,
        groupleader : req.body.groupleader,
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
    groups = await Creategroup.findById({ _id: id });

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

     
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/getgroupstudent/:id", async (req, res) => {
  console.log("getgroupstudent");
  try {
    let id = req.params.id;
    groups = await Creategroup.find();
    console.log(groups);
    let groupId = ""
    groups.forEach(group => {
      for(let i = 0 ; i <  group.members.length ; i++){
        if(group.members[i] == id){
          groupId = group.groupid
        }
      }

    });

    if(groupId){
      res.json(groupId);
    }else{
      res.json(false)
    }
    
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

//filter students to make a view in create groups UI

router.get("/getstud", async (req, res) => {
  console.log("hiiii to user");
  try {
    const groups = await users.find({"role" : "Student"});
    res.json(groups);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//filter supervisors to make a view in create groups UI

router.get("/getsuper", async (req, res) => {
  console.log("hiiii to user");
  try {
    const groups = await users.find({"role" : "Supervisor"});
    res.json(groups);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});




module.exports = router;
