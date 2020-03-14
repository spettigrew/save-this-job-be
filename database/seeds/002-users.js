exports.seed = async knex => {
  await knex("users").insert([
    { username: "", password: "", email: "" },
    { username: "", password: "", email: "" },
    { username: "", password: "", email: "" }
  ]);
};
