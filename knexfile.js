require("dotenv").config();
module.exports = {
  development: {
    client:process.env.CONFIGDB_CLIENT ,
    connection:{
        host:process.env.CONFIGDB_HOST,
        user:process.env.CONFIGDB_USER,
        password:process.env.CONFIGDB_PASSWORD,
        database:process.env.CONFIGDB_DATABASE,
    },
    migrations:{
        tableName: "knex_migrations",
        directory: `${__dirname}/src/model/migrations`,
    }
  },
};
