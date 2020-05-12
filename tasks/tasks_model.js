const db = require("../database/db-config");

function getTasks() {
    return db("tasks").select();
}

function getTaskById(taskId) {
    return db("tasks")
        .select()
        .where({ id: taskId })
        .first();
}

async function addTask(newTask) {
    const [added] = await db("tasks").insert( newTask );
    return getTaskById(added);
}

async function updateTask(taskId, updates) {
    await db("tasks").where({ id: taskId }).update(updates);
    return getTaskById(taskId);
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
}
