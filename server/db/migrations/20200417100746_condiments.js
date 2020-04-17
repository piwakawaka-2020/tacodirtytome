
exports.up = function(knex) {
  return knex.schema.createTable('condiments', table => {
    table.increments('id')
    table.string('con_name')
    table.string('con_url')
    table.string('con_recipe', 5000)
  })
};

exports.down = function(knex) {
  
};
