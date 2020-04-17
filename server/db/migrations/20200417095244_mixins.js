
exports.up = function(knex) {
  return knex.schema.createTable('mixins', table => {
    table.increments('id')
    table.string('mix_name')
    table.string('mix_url')
    table.string('mix_recipe', 5000)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('mixins')
};
