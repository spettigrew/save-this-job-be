const supertest = require("supertest");
const server = require("../api/server.js");
const db = require("../database/db-config");

beforeAll(async () => {
  console.log(`Tests called...`);
  await db.migrate.rollback();
  await db.migrate.latest();
  await db.seed.run();
});

describe("jobPosts router", () => {
  describe("get jobs", () => {
    it("should get all users' jobs, return 200", async () => {
      const res = await supertest(server).get('/users/jobs')
      
      expect(res.status).toBe(200);
      expect(res.type).toBe("application/json");
        })
    })
  describe("add job", () => {
    it("should add new job, return 201", async () => {
      const res = await supertest(server).post('/users/addJob').send({
        jobTitle: "Junior Dev",
        companyTitle: "Apple",
        urlText: "apple.com"
      })
      
      expect(res.status).toBe(201);
      expect(res.type).toBe("application/json");
        })
    })
  describe("get columns", () => {
    it("should return columns, return 200", async () => {
      const res = await supertest(server).get('/users/columns')

      expect(res.type).toBe("application/json");
      expect(res.status).toBe(200);
      expect(res.text.length).toBeGreaterThan(2);
    })
  })
    
});