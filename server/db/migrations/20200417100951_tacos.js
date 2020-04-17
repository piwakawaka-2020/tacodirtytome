
exports.up = function(knex) {
  return knex.schema.createTable('tacos', table => {
    table.increments('id')
    table.integer('base_layers_id')
    table.integer('mixin_id')
    table.integer('condiments_id')
    table.integer('shells_id')
    table.integer('seasonings_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tacos')
};
