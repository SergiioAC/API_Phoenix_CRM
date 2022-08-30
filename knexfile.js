// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "phoenix_crm",
      user: "postgres",
      password: "adm@#$"
    },
    migrations: {
      tablename: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
       },
    seeds: {
      directory: `${__dirname}/src/database/seeds`

    }       
  }
 
};
