require('dotenv').config();
const sqlite3 = {
    client: "sqlite3",
    useNullAsDefault: true,
    pool: {
        afterCreate: (conn, done) => {
            conn.run("PRAGMA foreign_keys = ON", done);
        }
    }
};
const commonDB = {
    migrations: {
        tableName: "knex_migrations",
        directory: "./database/migrations"
    },
    seeds: {
        directory: "./database/seeds"
    },
};
const localDB = {
    ...sqlite3,
    ...commonDB,
    connection: {
        filename: `${__dirname}/database/${process.env.NODE_ENV === 'test' ? 'test' : 'jobbook'}.db3`
    }
};
const deployedDB = {
    client: 'pg',
    ...commonDB,
    connection: process.env.DATABASE_URL,
    pool: {
        min: 2,
        max: 10
    }
};

module.exports = {
    development: {
        ...localDB
    },
    test: {
        ...localDB,
    },
    staging: {
        ...deployedDB
    },
    production: {
        ...deployedDB
    }
};