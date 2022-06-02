require('dotenv/config');

const { DB_USERNAME, PASSWORD_POSTGRES, DATABASE, HOST, DB_PORT } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: PASSWORD_POSTGRES,
    database: DATABASE,
    host: HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
  test: {
    username: DB_USERNAME,
    password: PASSWORD_POSTGRES,
    database: DATABASE,
    host: HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
  production: {
    username: DB_USERNAME,
    password: PASSWORD_POSTGRES,
    database: DATABASE,
    host: HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
};