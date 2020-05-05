const express = require("express");
const router = express.Router();
const colMod = require("./columns_model");
const authenticationRequired = require("../middleware/oktaJwtVerifier");
const checkUser = require("../middleware/checkUser");

router.get(
  "/columns",
  authenticationRequired,
  checkUser,
  async (req, res, next) => {
    try {
      const columns = await colMod.findColumn();
      res.status(200).json(columns);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
