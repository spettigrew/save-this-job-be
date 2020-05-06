const db = require("../database/db-config");

function findTags() {
  return db("jobTags").select();
}

function findTagsByUser(userId) {
  return db("jobTags")
    .select()
    .where({ userId });
}

async function findTagById(id) {
  const tag = await db("jobTags")
    .select()
    .where({ id })
    .first();

  return tag ? tag : null;
}

async function addTag(newTag, id) {
const {tagName} = newTag
  return db("jobTags")
    .insert({tagName,jobPosts_id:id});
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
  findTagsByUser,
  findTagById,
  addTag,
  removeTag,
  updateTag
};
