const supertest = require("supertest");
const server = require("../api/server.js");
const db = require("../database/db-config");

beforeAll(async () => {
  console.log(`Tests called...`);
  await db.migrate.rollback();
  await db.migrate.latest();
  await db.seed.run();
});

describe("tags router", () => {
  describe("get", () => {
    it("should get all tags, return 200", async () => {
      const res = await supertest(server).get('/')
      
      expect(res.status).toBe(200);
      expect(res.type).toBe("application/json");
    });
    it("should add a new tag to user's job post, return 201", async () => {
      const res = await supertest(server).post('/users/1/tags/addTag/1').send({
        tagName: "short commute"
      })
      expect(res.status).toBe(201);
      expect(res.type).toBe("application/json");
      expect(res.text).toBe("{\"message\":\"New tag created\"}");
    })
})});