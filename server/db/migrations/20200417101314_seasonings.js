
exports.up = function(knex) {
  return knex.schema.createTable('seasonings', table => {
    table.increments('id')
    table.string('sea_name')
    table.string('sea_url')
    table.string('sea_recipe', 5000)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('seasonings')
};
