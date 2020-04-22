// const supertest = require("supertest");
// const server = require("../index");
// const db = require("../database/db-config");

// beforeAll(async () => {
//   console.log(`Tests called...`);
//   await db.truncate("users");
//   await db.seed.run();
// });

// describe("tags router", () => {
//   describe("get", () => {
//     it("should get all tags, return 201", async () => {
//       const res = await supertest(server)
//         .post("/register")
//         .send({
//           firstName: "John",
//           lastName: "Smith",
//           email: "john@gmail.com"
//         });
//       expect(res.status).toBe(201);
//       expect(res.type).toBe("application/json");
//       expect(res.body.firstName).toBe("John");
//       expect(res.body.lastName).toBe("Smith");
//       console.log(res);
//     });
// });