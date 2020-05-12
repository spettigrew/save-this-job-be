exports.seed = async knex => {
  await knex("tasks").insert([
    { taskName: "fifth day" },
    { taskName: "sleep" },
    { taskName: "weekend fun" },
  ]);
};
