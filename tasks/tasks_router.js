const express = require("express");
const tasksModel = require("./tasks_model");
const router = express.Router({
    mergeParams: true,
})

router.get(
    "/",
    async (req, res, next) => {
        const jobId = req.params.jobId
        try{
            const tasks = await tasksModel.getTasks(jobId);
            res.status(200).json(tasks);
        } catch (err) {
            next(err);
        }
    }
)

router.get(
    "/:taskId",
    async (req, res, next) => {
        try {
            const taskId = req.params.taskId;
            const singleTask = await tasksModel.getTaskById(taskId);
            res.status(200).json(singleTask);
        } catch (err) {
            next(err);
        }
    }
)

router.post(
    "/",
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

router.put(
    "/:taskId",
    async (req, res, next) => {
        try {
            const taskId = req.params.taskId
            const updatedTask = await tasksModel.updateTask(taskId, req.body)
            if (updatedTask) {
                res.status(200).json({
                    message: "Task has been updated"
                })
            } else {
                res.status(404).json({
                    message: "Invalid update syntax"
                })
            }
        }
        catch(error) {
            next(error)
        }
    }
)

router.delete(
    "/:taskId",
    async (req, res, next) => {
        try {
            const deletedTask = await tasksModel.deleteTask(req.params.taskId)
            if (deletedTask) {
                res.status(204).json({
                    message: "Successfuly deleted task"
                })
            } else {
                res.status(404).json({
                    message: "A task with that id does not exist"
                })
            }
        } catch(error) {
            next(error)
        }
    }
)


module.exports = router;
