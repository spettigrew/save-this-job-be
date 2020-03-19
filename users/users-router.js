const express = require("express");
const router = express.Router();
const OktaClient = require("../lib/oktaClient");
const Users = require("./users-model");
const db = require("../database/db-config");

router.post("/register", async (req, res, next) => {
  if (!req.body)
    return res
      .status(400)
      .json({ message: "Please enter all required felids" });
  try {
    const newUser = {
      profile: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        login: req.body.email
      },
      credentials: {
        password: {
          value: req.body.password
        }
      }
    };
    const response = await OktaClient.createUser(newUser);
    console.log(response);

    // Only Add that user to the applications database if the user was successfully added to okta's database
    if (response.status === "ACTIVE") {
      const appUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
      };
      const saved = await Users.add(appUser, "id");
      res.status(201).json(saved);
    } else {
      return res.json(response);
    }
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

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

module.exports = router;
