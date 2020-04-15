exports.seed = async knex => {
  await knex("jobTags").insert([
    { tagName: "remote", jobPosts_id: 1 },
    { tagName: "part time", jobPosts_id: 2 },
    { tagName: "full time", jobPosts_id: 3 },
  ]);
};
