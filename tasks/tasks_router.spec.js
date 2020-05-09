const supertest = require("supertest");
const server = require("../api/server.js");
const db = require("../database/db-config");

beforeAll(async () => {
    console.log(`Tasks tests called...`);
    await db.migrate.rollback();
    await db.migrate.latest();
    await db.seed.run();
});

describe("tasks router", () => {
    describe("get tasks", () => {
        it("should get all tasks, return 200", async () => {
            const res = await supertest(server).get('/users/tasks');

            expect(res.body).toHaveLength(3);
            expect(res.status).toBe(200)
            expect(res.type).toBe("application/json")
        })
    })
})