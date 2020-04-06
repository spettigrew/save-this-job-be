const pg = require("pg");

const sqlite3 = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: {
    directory: "./database/migrations"
  },
  seeds: {
    directory: "./database/seeds"
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run("PRAGMA foreign_keys = ON", done);
    }
  }
};

module.exports = {
  development: {
    ...sqlite3,
    connection: {
      filename: "./database/jobbook.db3"
    }
  },

  test: {
    ...sqlite3,
    connection: {
      filename: "./database/test.db3"
    }
  },

  staging: {
    client: "pg",
    connection: {
      database: process.env.DATABASE_URL,
      user: process.env.USER,
      password: process.env.PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: __dirname + "/database/migrations"
    }
  },

  production: {
    client: "pg",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: __dirname + "/database/migrations"
    }
  }
};
