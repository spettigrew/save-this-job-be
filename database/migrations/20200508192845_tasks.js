
exports.up = async function(knex) {
    await knex.schema.createTable("tasks", (table) => {
      table.increments("id");
      table.string("taskName", 128).notNull();
      table.date("date");
      table.boolean("completed").defaultTo(false);
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("tasks");
};