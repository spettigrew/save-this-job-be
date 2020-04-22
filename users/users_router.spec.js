// const supertest = require("supertest");
// const server = require("../index");
// const db = require("../database/db-config");
// beforeAll(async () => {
//   console.log(`Tests called...`);
//   await db.truncate("users");
//   await db.seed.run();
// });
// describe("users router", () => {
//   describe("register", () => {
//     it("should register new user, return 201, returns add function", async () => {
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
//     it("should NOT register duplicate email, return 400", async () => {
//       const res = await supertest(server)
//         .post("/register")
//         .send({
//           firstName: "Heather",
//           lastName: "Smith",
//           email: "john@gmail.com"
//         });
//       expect(res.status).toBe(400);
//       expect(res.type).toBe("application/json");
//       expect(res.body.message).toBe("Email already exists");
//     });
//   });
//   describe("log in", () => {});
// });