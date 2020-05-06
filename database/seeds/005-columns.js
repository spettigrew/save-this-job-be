exports.seed = async knex => {
    await knex("columns").insert([
        {id: 1, column_name: 'Interested'},
        {id: 2, column_name: 'Applied'},
        {id: 3, column_name: 'Interviewed'}
        {id: 4, column_name: 'Accepted'}
    ])
}
        
