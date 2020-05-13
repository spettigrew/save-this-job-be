const express = require("express");
const router = express.Router({
    mergeParams: true,
})
const interviewsModel = require("./interviews_model");
const jobModel = require("../jobPosts/job_posts_model");
const authenticationRequired = require("../middleware/oktaJwtVerifier.js");

router.get(
    "/interviews",
    authenticationRequired,
    async (req, res, next) => {
        try {
            const jobPosts = await jobModel.findJobByUser(req.userId);
            console.log(jobPosts)
            try {
                const interviews = await jobPosts.map(job => {
                    interviewsModel.getInterviews(job.id)
                });
                
                res.status(200).json(interviews);
            }
            catch (err) {
                next(err)
            }
        }
        catch(err) {
            next(err)
        }
    }
)

module.exports = router;