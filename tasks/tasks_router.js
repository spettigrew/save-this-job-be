const express = require("express");
const tasksModel = require("./tasks_model");
const authenticationRequired = require("../middleware/oktaJwtVerifier");
const router = express.Router({
    mergeParams: true,
})

router.get(
    "/",
    authenticationRequired,
    async (req, res, next) => {
        try{
            const tasks = await tasksModel.getTasks();
            res.status(200).json(tasks);
        } catch (err) {
            next(err);
        }
    }
)

router.get(
    "/:taskId",
    authenticationRequired,
    async (req, res, next) => {
        try {
            const taskId = req.params.taskId;
            const singleTask = await tasksModel.getTasksById(taskId);
            res.status(200).json(singleTask);
        } catch (err) {
            next(err);
        }
    }
)

router.post(
    "/",
    authenticationRequired,
    async (req, res, next) => {
        try {
            const addedTask = await tasksModel.addTask(req.body);
            if (addedTask) {
                res.status(201).json({ 
                    message: "New task created"
                })
            } else {
                res.status(404).json({
                    message: "Error - no task name"
                })
            }
        } catch (err) {
            next(err);
        }
    }
)

module.exports = router;