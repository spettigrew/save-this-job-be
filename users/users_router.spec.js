const supertest = require("supertest");
const server = require("../index");
const db = require("../database/db-config");

beforeAll(async () => {
  console.log(`Tests called...`);
  // truncate seeds
  // run all seeds
});

describe("users router", () => {
  describe("register", () => {});
  describe("log in", () => {});
});
