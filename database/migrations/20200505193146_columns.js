exports.up = async function(knex) {
    await knex.schema.createTable("columns", table => {
        table.increments("id")
        table.string("column_name").notNullable()
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("columns")
};
