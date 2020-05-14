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
      const res = await supertest(server).get('/users/tags')
      
            expect(res.status).toBe(200);
            expect(res.type).toBe("application/json");
            expect(res.text).toBe('[{\"id\":1,\"tagName\":\"remote\",\"jobPosts_id\":1},{\"id\":2,\"tagName\":\"part time\",\"jobPosts_id\":2},{\"id\":3,\"tagName\":\"full time\",\"jobPosts_id\":3}]')
    });
    it("should add a new tag to user's job post, return 201", async () => {
      const res = await supertest(server).post('/users/tags/addTag/1').send({
        tagName: "short commute"
      })
      expect(res.status).toBe(201);
      expect(res.type).toBe("application/json");
      expect(res.text).toBe("{\"message\":\"New tag created\"}");
    })
      it("should delete a tag, return 200", async () => {
          const res = await supertest(server).del("/users/tags/removeTag/1")

          expect(res.status).toBe(200)
          expect(res.text).toBe('{\"message\":\"Tag successfully deleted\"}')
      })
      it("should update the tag, return 200", async () => {
          const res = await supertest(server).put("/users/tags/updateTag/2").send({
              tagName: "part-time"
          })

          expect(res.status).toBe(200)
          expect(res.type).toBe("application/json")
          expect(res.text).toBe("{\"message\":\"Tag updated\"}")
      })
})});
