exports.up = async function(knex) {
    await knex.schema.table("jobPosts", table => {
      table.float("latitude");
      table.float("longitude");
    });
  };
  
  exports.down = async function(knex) {
    await knex.schema.table("jobPosts", table => {
      table.dropColumn("latitude");
      table.dropColumn("longitude");
    });
  };
  