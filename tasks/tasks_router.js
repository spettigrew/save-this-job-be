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