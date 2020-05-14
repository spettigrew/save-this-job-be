const express = require("express");
const router = express.Router({
    mergeParams: true,
})
const interviewsModel = require("./interviews_model");
const jobModel = require("../jobPosts/job_posts_model");

router.get(
    "/interviews",
    async (req, res, next) => {
        try {
            const jobPosts = await jobModel.findJobByUser(req.userId);
            try {
                const interviews = jobPosts.map(async job => {
                    let interview = await interviewsModel.getInterviews(job.id)
                    return interview
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
