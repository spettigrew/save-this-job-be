const express = require("express");
const router = express.Router({
    mergeParams: true,
})
const interviewsModel = require("./interviews_model");
const authenticationRequired = require("../middleware/oktaJwtVerifier.js");

router.get(
    "/interviews",
    authenticationRequired,
    async (req, res, next) => {
        try {
            const interviews = await interviewsModel.getInterviews();
            res.status(200).json(interviews);
        }
        catch(err) {
            next(err)
        }
    }
)

module.exports = router;