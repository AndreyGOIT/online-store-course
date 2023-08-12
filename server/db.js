const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  process.env.DB_NAME, // database name
  process.env.DB_USER, // username
  process.env.DB_PASSWORD, // password
  {
    dialect: "postgres", // database
    host: process.env.DB_HOST, // database
    port: process.env.DB_PORT, // database
  }
);
