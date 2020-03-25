const express = require("express");
const router = express.Router();
const jobMod = require("./job_posts_model.js");

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const removeJob = await jobMod.removeJob(id);
    res.status(200).json({ message: "Job deleted" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;