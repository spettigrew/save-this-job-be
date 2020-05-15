const supertest = require("supertest");
const server = require("../api/server.js");
const db = require("../database/db-config");

beforeAll(async () => {
  console.log(`Job posts tests called...`);
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
  describe("delete job", () => {
    it("should delete a job, return 200", async () => {
      const res = await supertest(server).del('/users/removeJob/2')

      expect(res.status).toBe(200);
      expect(res.text).toBe('{"message":"Job successfully deleted"}');
    })
  })
  describe("update job", () => {
    it("should update a job, return 200", async () => {
      const res = await supertest(server).put('/users/updateJob/1').send({
        jobTitle: 'Junior Developer'
      })

      expect(res.status).toBe(200);
      expect(res.type).toBe('application/json');
      expect(res.text).toBe('{"message":"Job post updated"}')
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