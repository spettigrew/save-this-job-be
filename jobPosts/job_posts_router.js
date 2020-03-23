const express = require("express");
const router = express.Router();
const jobMod = require("./job_posts_model.js");

router.post("/addJob", async (req, res, next) => {
  try {
    const newJob = await jobMod.addJob(req.body);
    res.status(201).json({
      message: "Job Post created"
    });
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const removeJob = await jobMod.removeJobPost(id);
    res.status(200).json({ message: "Job deleted" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
