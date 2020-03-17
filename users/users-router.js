const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("users").select("id", "email");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  return db("users")
    .insert(user, "id")
    .returning("*");
}

function findById(email) {
  return db("users")
    .select("email", "email")
    .where({ email })
    .first();
}
