const express = require("express");
const router = express.Router();
const docupload = require("../model/documentUpload");

/**
 * @router - create topics
 */
router.post("/createdoc", async (req, res) => {
  //creating the JS object
  const docs = new docupload({
    document: req.body.document,
  });

  try {
    const newdoc = await docs.save();
    res.status(201).json(newdoc);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});


router.get("/getdocs", async (req, res) => {
  console.log("hiiii to get");
  try {
    const docs = await docupload.find();
    res.json(docs);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
