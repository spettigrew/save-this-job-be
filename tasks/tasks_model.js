const db = require("../database/db-config");

function getTasks() {
    return db("tasks").select();
}

function getTasksById(taskId) {
    return db("tasks")
        .select()
        .where({ id: taskId })
        .first();
}

async function addTask(newTask) {
    const added = await db("tasks").insert( newTask );
    return getTasksById(added);
}

async function updateTask(taskId, updates) {
    await db("tasks").where({ taskId }).update(updates);
    return getTasksById(taskId);
}

function deleteTask(taskId) {
    return db("tasks")
        .where({ taskId })
        .del();
}

module.exports = {
    getTasks,
    getTasksById,
    addTask,
    updateTask,
    deleteTask,
}