const supertest = require("supertest");
const server = require("../index");
const db = require("../database/db-config");

beforeAll(async () => {
  console.log(`Tests called...`);
  //   await db.truncate('users')
  //   await db.seed.run()
});

describe("users router", () => {
  describe("register", () => {});
  describe("log in", () => {});
});
