const supertest = require("supertest");
const server = require("../api/server.js");
const db = require("../database/db-config");

beforeAll(async () => {
  console.log(`Tests called...`);
  await db.seed.run();
});

describe("jobPosts router", () => {
  describe("get", () => {
    it("should get all users' jobs, return 200", async () => {
      const res = await supertest(server)

      expect(res.status).toBe(200);
      expect(res.type).toBe("application/json");
      console.log(res);
    })
})});