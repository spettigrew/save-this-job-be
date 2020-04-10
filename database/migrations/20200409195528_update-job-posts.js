exports.up = async function(knex) {
  await knex.schema.table("jobPosts", table => {
    table.dropColumn("url");
    table
      .text("urlText")
      .notNull()
      .defaultTo("default");
    table.date("applicationDeadline");
    table.decimal("rating");
  });
};

exports.down = async function(knex) {
  await knex.schema.table("jobPosts", table => {
    table.dropColumn("urlText");
    table.string("url").notNull();
    table.dropColumn("applicationDeadline");
    table.dropColumn("rating");
  });
};
