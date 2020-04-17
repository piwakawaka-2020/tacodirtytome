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

function addTaco(tacoData, db = connection) {
  const ids = {
    base_layers_id: 0,
    mixin_id: 0,
    condiments_id: 0,
    shells_id: 0,
    seasonings_id: 0
  }

  return db('base_layers')
    .insert({...tacoData.base_layer})
    .then(id => {
      ids.base_layers_id = id[0]
      
      return db('mixins')
      .insert({...tacoData.mixin})
      .then(id => {
        ids.mixin_id = id[0]

        return db('shells')
        .insert({...tacoData.shell})
        .then(id => {
          ids.shells_id = id[0]

          return db('condiments')
          .insert({...tacoData.condiment}) 
          .then(id => {
            ids.condiments_id = id[0]

            return db('seasonings')
            .insert({...tacoData.seasonings})
            .then(id => {
              ids.seasonings_id = id[0]

              return db('tacos')
              .insert({...ids})
              .then(id => {
                return id[0]
              })
            })
          })
        })
      })
    })
}

module.exports = {
  getAllTacos,
  getTacoById,
  addTaco
}