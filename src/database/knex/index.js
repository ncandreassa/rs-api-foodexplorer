const config = require("../../../knexfile");
const knex = require("knex");

const envConfig = process.env.RENDER_ENV ? config[process.env.RENDER_ENV] : config.development
const connection = knex(envConfig);

module.exports = connection;
