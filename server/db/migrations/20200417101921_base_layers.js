
exports.up = function(knex) {
  return knex.schema.createTable('base_layers', table => {
    table.increments('id')
    table.string('base_name')
    table.string('base_url')
    table.string('base_recipe', 5000)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('base_layers')
};
