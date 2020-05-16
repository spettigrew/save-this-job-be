exports.seed = async knex => {
  await knex("tasks").insert([
      { job_id: 1, taskName: "fifth day" },
      { job_id: 1, taskName: "sleep" },
      { job_id: 2, taskName: "weekend fun" },
  ]);
};
