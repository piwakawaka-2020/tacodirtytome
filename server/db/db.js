const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getAllTacos(db = connection) {
  return db('tacos')
  .join('base_layers', 'tacos.base_layers_id', 'base_layers.id')
  .then(tacos => tacos)
}

function getTacoById(id, db = connection) {
  return db('tacos')
  .where('tacos.id', id)
  .join('base_layers', 'base_layers.id', 'tacos.base_layers_id')
  .join('mixins', 'mixins.id', 'tacos.mixin_id')
  .join('shells', 'shells.id', 'tacos.shells_id')
  .join('condiments', 'condiments.id', 'tacos.condiments_id')
  .join('seasonings',  'seasonings.id', 'tacos.seasonings_id')
  .then(taco => taco[0])
}

function addTaco(mixData, conData, shellData, baseData, seaData, db = connection) {

}

module.exports = {
  getAllTacos,
  getTacoById,
  addTaco
}