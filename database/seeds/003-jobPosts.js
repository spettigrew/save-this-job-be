exports.seed = async knex => {
  await knex("jobPosts").insert([
    { jobTitle: "Junior Dev", url: "https://blah.com", users_id: 1 },
    { jobTitle: "Node Master", url: "https://Node.com", users_id: 1 },
    { jobTitle: "React Wizard", url: "https://DonWhitely.com", users_id: 2 }
  ]);
};
