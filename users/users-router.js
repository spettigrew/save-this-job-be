const express = require("express");
const router = express.Router();
const oktaClient = require("../lib/oktaClient");
const Users = require("./users-model");
const db = require("../database/dbConfig");

router.post("/register", async (req, res, next) => {
  if (!req.body) return res.sendStatus(400);
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

  // Add a user to our OKTA application
  oktaClient
    .createUser(newUser)
    .then(user => {
      res.status(201);
      res.send(user);
    })
    .catch(err => {
      res.status(400);
      res.send(err);
    });

  // Add that user to the applications database
  try {
    const appUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    };
    const saved = await Users.add(appUser, "id");

    res.status(201).json(saved);
  } catch (err) {
    next(err);
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
