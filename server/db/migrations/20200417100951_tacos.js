
exports.up = function(knex) {
  return knex.schema.createTable('tacos', table => {
    table.increments('id')
    table.int('base_layers_id')
    table.int('mixin_id')
    table.int('condiments_id')
    table.int('shells_id')
    table.int('seasonings_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tacos')
};
