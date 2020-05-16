const supertest = require("supertest");
const server = require("../api/server");
const db = require("../database/db-config");

beforeAll(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
    await db.seed.run();
})

describe("interviews router", () => {
    describe("get interviews", () => {
        it("should get all interviews, return 200", async () => {
            const res = await supertest(server).get(`/users/interviews`);

            expect(res.status).toBe(200);
            expect(res.type).toBe("application/json");
            expect(res.body).toHaveLength(3);
        })
    })
})
