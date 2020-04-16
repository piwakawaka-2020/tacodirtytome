
exports.up = function(knex) {
  return knex.schema.createTable('shells', table => {
    table.increments('id')
    table.string('shell_name')
    table.string('shell_url')
    table.string('shell_recipe', 5000)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('shells')
};
