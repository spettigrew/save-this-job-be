const db = require("../database/db-config");

function findColumn() {
  return db("columns").select();
}

module.exports = {
  findColumn,
};
