exports.up = async function(knex) {
    await knex.schema.createTable("interviews", table => {
      table.increments("id");
      table.int("interviewNumber").defaultTo(1).notNull();
      table.string("interviewDate").notNull();
      table.string("interviewTime").notNull();
      table.text("interviewLocation").notNull();
      table.float("interviewLatitude");
      table.float("interviewLongitude");
      table.string("interviewType").notNull();
      table.text("interviewNotes");
      table.string("contactName");
      table.string("contactPhone");
      table.string("contactEmail");
      table
        .integer("jobPosts_id")
        .references("id")
        .inTable("jobPosts")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNull()
    });
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("interviews");
  };
  