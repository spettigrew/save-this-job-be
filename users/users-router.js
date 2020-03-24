const express = require("express");
const router = express.Router();
const userMod = require("./users-model");
const jobMod = require("../jobPosts/job_posts_model.js");
const db = require("../database/db-config");
const authenticationRequired = require("../middleware/oktaJwtVerifier");

// Not sure, for Okta?
router.get("/:email", async (req, res) => {
  try {
    const user = await db("users")
      .where({ email: req.params.email })
      .first();

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

// Get user by Id
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userMod.findBy(id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

// Grab user jobs
router.get("/:id/jobs", async (req, res, next) => {
  try {
    const { id } = req.params;
    const jobPosts = await jobMod.findJobByUser(id);
    res.status(200).json(jobPosts);
  } catch (err) {
    next(err);
  }
});
//  add job to user
router.post("/addJob", authenticationRequired, async (req, res, next) => {
  try {
    const firstName = req.jwt.claims.firstName;
    const lastName = req.jwt.claims.lastName;
    const email = req.jwt.claims.email;
    const user = await userMod.findByEmail(email);

    if (user) {
      saveJob(req.body, user.id, res);
    } else {
      const appUser = {
        firstName,
        lastName,
        email
      };
      const [id] = await userMod.add(appUser);
      saveJob(req.body, id, res);
    }
  } catch (err) {
    next(err);
  }
});

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
