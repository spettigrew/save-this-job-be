exports.up = async function(knex) {
    await knex.schema.table("jobPosts", table => {
      table.string("column").defaultTo('Interested');
    });
  };
  
  exports.down = async function(knex) {
    await knex.schema.table("jobPosts", table => {
      table.dropColumn("column");
    });
  };