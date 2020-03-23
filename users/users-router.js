const express = require("express");
const router = express.Router();
const OktaClient = require("../lib/oktaClient");
const userMod = require("./users-model");
const db = require("../database/db-config");

router.post("/register", async (req, res, next) => {
  if (!req.body)
    return res
      .status(400)
      .json({ message: "Please enter all required felids" });

  try {
    // const newUser = {
    //   profile: {
    //     firstName: req.body.firstName,
    //     lastName: req.body.lastName,
    //     email: req.body.email,
    //     login: req.body.email
    //   },
    //   credentials: {
    //     password: {
    //       value: req.body.password
    //     }
    //   }
    // };
    // const response = await OktaClient.createUser(newUser);
    // console.log(response);
    // res.json(response);

    // Only Add that user to the applications database if the user was successfully added to okta's database
    if (response.status === "ACTIVE") {
      const appUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
      };
      await userMod.add(appUser, "id");
    }
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

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
    const jobPosts = await jobMod.findBy(id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
