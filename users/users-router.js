const bcrypt = require("bcryptjs");
const express = require("express");

const usersModel = require("./users-model");
const secrets = require("../config/secrets");
const validate = require("../middleware/validate-user");
const db = require("../database/db-config");

const router = express.Router();

// register route
router.post("/register", async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});

// login route
router.post("/login", async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});

module.exports = router;
