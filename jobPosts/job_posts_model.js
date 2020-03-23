const db = require("../database/db-config");

function findJob() {
  return db("jobPosts").select();
}

async function addJob(user) {
  return db("jobPosts").insert(user, "id");
}

// find specific job post

function findJobById(id) {
  return db("jobPosts")
    .select()
    .where({ id })
    .first();
}

function findJobByUser(users_id) {
  return db("jobPosts")
    .select()
    .where({ users_id });
}

// need to find all job posts under user id

function removeJob(id) {
  return db("jobPosts")
    .where({ id })
    .del();
}

module.exports = {
  addJob,
  findJob,
  findJobBy,
  findJobById,
  removeJob,
  findJobByUser
};
