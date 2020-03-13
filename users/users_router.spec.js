const supertest = require("supertest");
const server = require("../index");
const db = require("../database/db-config");

beforeAll(async () => {
  console.log(`Tests called...`);
  //   await db.truncate('users')
  //   await db.seed.run()
});

describe("users router", () => {
  describe("register", () => {
    it("should register new user, return 201", async () => {});
    it("should NOT register duplicate user, return 400", async () => {});
    it("should NOT register duplicate email, return 400", async () => {});
  });
  describe("log in", () => {});
});
