const db = require("../database/db-config");

function findTags() {
  return db("jobTags").select();
}

async function addTag(newTag, id) {
  return db("jobTags")
    .where({ id })
    .insert(newTag);
}

function removeTag(id) {
  return db("jobTags")
    .where({ id })
    .del();
}

// update needs work - does not return anything
async function updateTag(id, tag_update) {
  await db("jobTags")
    .where({ id })
    .update(tag_update)
    // .returning("*");
}

module.exports = {
  findTags,
  addTag,
  removeTag,
  updateTag
};
