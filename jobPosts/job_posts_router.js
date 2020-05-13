const express = require("express");
const router = express.Router();
const jobMod = require("../jobPosts/job_posts_model.js");
const tagsRouter = require("../tags/tags_router");
const authenticationRequired = require("../middleware/oktaJwtVerifier");
const checkUser = require("../middleware/checkUser");

router.use("/:id/tags", tagsRouter);

// Grab user jobs
router.get(
  "/jobs",
  authenticationRequired,
  checkUser,
  async (req, res, next) => {
    try {
      const jobPosts = await jobMod.findJobByUser(req.userId);
      res.status(200).json(jobPosts);
    } catch (err) {
      next(err);
    }
  }
);
//  add job to user
router.post(
  "/addJob",
  authenticationRequired,
  checkUser,
  async (req, res, next) => {
    try {
      const job = await jobMod.addJob(
        { ...req.body, users_id: req.userId },
        req.userId
      );
      if (job) {
        res.status(201).json({
          message: "Job post created"
        });
      } else {
        res.status(500).json({
          message: "Error saving job post, please try again later"
        });
      }
    } catch (err) {
      next(err);
    }
  }
);
// remove job from user
router.delete(
  "/removeJob/:id",
  authenticationRequired,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const job = await jobMod.findJobById(id);
      const count = await jobMod.removeJob(id);

      if (!job) {
        return res
          .status(400)
          .json({ message: "The job you are trying to delete does not exist" });
      }

      if (count > 0) {
        res.json({ message: "Job successfully deleted" });
      } else {
        res
          .status(500)
          .json({ message: "There was an error deleting your job post" });
      }
    } catch (err) {
      next(err);
    }
  }
);

router.put(
  "/updateJob/:id",
  authenticationRequired,
  checkUser,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedJob = await jobMod.updateJob(id, req.body);
      if (updatedJob) {
        res.status(200).json({
          message: "Job Post Updated"
        });
      } else {
        send.status(500).json({
          message: "Error Updating Job Post, please try again later"
        });
      }
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
