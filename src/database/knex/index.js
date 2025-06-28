const config = require("../../../knexfile");
const knex = require("knex");

console.log("config", config)

const connection = knex(config.development);

module.exports = connection;
