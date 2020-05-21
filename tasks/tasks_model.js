const db = require("../database/db-config");

function getTasks(jobId) {
    return db("tasks")
        // .join("jobPosts", "tasks.job_id", "jobPosts.id")
        .where({job_id: jobId})
        .select()
        // .select("jobPosts.jobTitle", "jobPosts.companyTitle", "tasks.id", "tasks.taskName", "tasks.completed", "tasks.date");
}

function getTaskById(jobId, taskId) {
    return db("tasks")
        // .join("jobPosts", "tasks.job_id", "jobPosts.id")
        // .where({job_id: jobId})
        .where("tasks.id", taskId)
        .select()
        // .select( "tasks.id", "tasks.taskName", "tasks.completed", "tasks.date");
}

async function addTask(jobId, newTask) {
    const [added] = await db("tasks").insert( newTask );
    return getTaskById(jobId, added);
}


async function updateTask(jobId, taskId, updates) {
  await db("tasks")
    .where({ id: taskId })
    .update(updates);
  return getTaskById(jobId, taskId);
}

function deleteTask(taskId) {
  return db("tasks")
    .where({ id: taskId })
    .del();
}

module.exports = {
  getTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
};
