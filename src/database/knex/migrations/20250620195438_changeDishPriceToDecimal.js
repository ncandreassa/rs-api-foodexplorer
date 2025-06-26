exports.up = function (knex) {
    return knex.schema.alterTable("dishes", (table) => {
      table.decimal("price", 10, 2).alter();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.alterTable("dishes", (table) => {
      table.float("price").alter();
    });
  };