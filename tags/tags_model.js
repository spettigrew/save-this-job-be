const db = require("../database/db-config");

function findTags() {
  return db("jobTags").select();
}

function findTagByUser(users_id) {
  return db("jobTags")
    .select()
    .where({ users_id });
}

async function findTagById(id) {
  const tag = await db("jobTags")
    .select()
    .where({ id })
    .first();

  return tag ? tag : null;
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

async function updateTag(id, tag_update) {
  await db("jobTags")
    .where({ id })
    .update(tag_update)
  return findTagById(id);
}

module.exports = {
  findTags,
  findTagByUser,
  findTagById,
  addTag,
  removeTag,
  updateTag
};
