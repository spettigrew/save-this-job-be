const db = require("../database/db-config");

function findJob() {
  return db("jobPosts").select();
}

async function addJob(job, id) {
  return db("jobPosts")
    .where({ id })
    .insert(job);
}

// find specific job post

async function findJobById(id) {
  const job = await db("jobPosts")
    .select()
    .where({ id })
    .first();

  return job ? job : null;
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
  findJobById,
  removeJob,
  findJobByUser
};
