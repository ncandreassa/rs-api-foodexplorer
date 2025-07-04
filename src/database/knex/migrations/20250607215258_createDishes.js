exports.up = (knex) =>
    knex.schema.createTable("dishes", (table) => {
      table.increments("id");
      table.text("name");
      table.text("category");
      table.json("ingredients");
      table.decimal("price");
      table.text("description");
  
      table.timestamp("created_at").default(knex.fn.now());
      table.timestamp("updated_at").default(knex.fn.now());
    });
  
  exports.down = (knex) => knex.schema.dropTable("dishes");