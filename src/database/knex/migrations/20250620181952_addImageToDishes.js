exports.up = function(knex) {
    return knex.schema.table('dishes', function(table) {
      table.string('image');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('dishes', function(table) {
      table.dropColumn('image');
    });
  };
