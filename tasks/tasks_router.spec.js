const supertest = require("supertest");
const server = require("../api/server.js");
const db = require("../database/db-config");

beforeAll(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
    await db.seed.run();
});

describe("tasks router", () => {
    describe("get tasks", () => {
        it("should get all tasks, return 200", async () => {
            const res = await supertest(server).get('/users/tasks/1');

            expect(res.text).toBe("[{\"jobTitle\":\"Junior Dev\",\"companyTitle\":\"Amazon\",\"id\":1,\"taskName\":\"fifth day\",\"completed\":0,\"date\":null},{\"jobTitle\":\"Junior Dev\",\"companyTitle\":\"Amazon\",\"id\":2,\"taskName\":\"sleep\",\"completed\":0,\"date\":null}]");
            expect(res.status).toBe(200)
            expect(res.type).toBe("application/json")
        })
        it("should get one task, return 200", async() => {
            const res = await supertest(server).get('/users/tasks/1/1');

            expect(res.text).toBe("[{\"jobTitle\":\"Junior Dev\",\"companyTitle\":\"Amazon\",\"id\":1,\"taskName\":\"fifth day\",\"completed\":0,\"date\":null}]");
            expect(res.status).toBe(200);
            expect(res.type).toBe("application/json");
        })
    })
    describe("add task", () => {
        it("should add new task, return 201", async() => {
            const res = await supertest(server).post('/users/tasks/2/addTask').send({
                taskName: "Update resume"
            })
            
            expect(res.status).toBe(201);
            expect(res.type).toBe("application/json");
            expect(res.body.message).toBe("New task created");
        })
    })
    describe("update task", () =>{
        it("should edit the new task, return 200", async() => {
            const res = await supertest(server).put('/users/tasks/1/1').send({
                completed: 1
            })

            expect(res.status).toBe(200);
            expect(res.type).toBe("application/json");
            expect(res.body.message).toBe("Task has been updated");
        })
    })
    describe("delete task", () => {
        it("should delete the task, status 204", async() => {
            const res = await supertest(server).del('/users/tasks/2')

            expect(res.status).toBe(204)
        })
    })
})
