const db = require("../database/db-config");

function find() {
  return db("users").select("id", "email");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  return db("users").insert(user);
}

async function findByEmail(email) {
  const user = await db("users")
    .where({ email })
    .first();

  return user ? user : null;
}

module.exports = {
  add,
  find,
  findBy,
  findByEmail
};
