const db = require("../database/db-config");

function getInterviews() {
    return db("interviews").select();
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