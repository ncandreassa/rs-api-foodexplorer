const config = require("../../../knexfile");
const knex = require("knex");

console.log("process.env.RENDER_ENV", process.env.RENDER_ENV)
console.log(config)

const envConfig = process.env.RENDER_ENV ? config[process.env.RENDER_ENV] : config.development
const connection = knex(envConfig);

module.exports = connection;
