const express = require("express");
const router = express.Router();
const userMod = require("./users-model");
const jobMod = require("../jobPosts/job_posts_model.js");
const db = require("../database/db-config");
const authenticationRequired = require("../middleware/oktaJwtVerifier");
const checkUser = require("../middleware/checkUser");

// Not sure, for Okta?
// router.get("/", async (req, res) => {
//   try {
//     const user = await db("users")
//       .where({ email: req.params.email })
//       .first();

//     res.status(200).json(user);
//   } catch (err) {
//     next(err);
//   }
// });

// Get user by Id
// router.get("/", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const user = await userMod.findBy(id);
//     res.status(200).json(user);
//   } catch (err) {
//     next(err);
//   }
// });

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
      saveJob(req.body, req.userId, res);
    } catch (err) {
      next(err);
    }
  }
);

async function saveJob(info, id, res) {
  const job = await jobMod.addJob({ ...info, users_id: id }, id);
  if (job) {
    res.status(201).json({
      message: "Job Post Created"
    });
  } else {
    send.status(500).json({
      message: "Error Saving Job Post, please try again later"
    });
  }
}

module.exports = router;
