exports.seed = async (knex) => {
  await knex("columns").insert([
      { column_name: "Interested" },
      { column_name: "Applied" },
      { column_name: "Offered" },
      { column_name: "Accepted" },
  ]);
};
