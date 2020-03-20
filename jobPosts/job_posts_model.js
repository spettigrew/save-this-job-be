const db = require("../database/db-config");

function findJobPost() {
  return db("jobPosts").select();
}

function findJobPostBy(filter) {
  return db("jobPosts").where(filter);
}

async function addJob(user) {
  return db("jobPosts").insert(user, "id");
}

function findJobPostById(id) {
  return db("jobPosts")
    .select()
    .where({ id })
    .first();
}

// need to find all job posts under user id

function removeJobPost(id) {
  return db("jobPosts")
    .where({ id })
    .del();
}

module.exports = {
  addJob,
  findJobPost,
  findJobPostBy,
  findJobPostById,
  removeJobPost
};
