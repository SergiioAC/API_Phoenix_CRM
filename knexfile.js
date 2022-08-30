// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    //client: 'pg',
      client: 'pg',
    connection: {
//      database: "phoenix_crm",
//      user: "postgres",
//      password: "adm@#$"
      database: "d8scmptcj13n6b",
      user: "dgcbqimbztpnlg",
      password: "5badf414c7bb78702dd0a0a78ed63b0f60b956e48cd84899090753bd6070cf7d"
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
