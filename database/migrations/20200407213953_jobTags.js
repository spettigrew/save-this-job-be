exports.up = async function(knex) {
  await knex.schema.createTable("jobTags", table => {
    table.increments("id");
    table.string("tagName").notNull();
    table
      .integer("jobPosts_id")
      .references("id")
      .inTable("jobPosts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("jobTags");
};
