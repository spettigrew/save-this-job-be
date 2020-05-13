const db = require("../database/db-config");

function getInterviews(jobPostId) {
    return db("interviews")
        .select()
        .where({ jobPosts_id: jobPostId });
}

function getInterviewById(interviewId) {
    return db("interviews")
        .select()
        .where({ id: interviewId})
        .first();
}

async function addInterview(newInterview) {
    const added = await db("interviews").insert( newInterview );
    return getInterviewById(added[0]);
}

async function updateInterview(interviewId, updates) {
    await db("interviews").where({ id: interviewId }).update(updates);
    return getInterviewById(interviewId);
}

function deleteInterview(interviewId) {
    return db("interviews")
        .where({ id: interviewId })
        .del();
}

module.exports = {
    getInterviews,
    getInterviewById,
    addInterview,
    updateInterview,
    deleteInterview
}