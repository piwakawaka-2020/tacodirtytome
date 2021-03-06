const server = require('express')
const router = server.Router()

const dbFunctions = require('../db/db')

router.get('/', (req, res) => {
  dbFunctions.getAllTacos()
  .then(tacos => {

    const formattedTacos = tacos.map(taco => {
      return {
        id: taco.id,
        name: taco.base_name
      }
    })
    return res.json(formattedTacos)
  })
})

router.post('/', (req, res) => {
  dbFunctions.addTaco(req.body)
  .then(() => {
    res.sendStatus(201)
  })
})

router.get('/:id', (req, res) => {
  dbFunctions.getTacoById(req.params.id)
  .then(taco => {

    const formattedTaco = {
      shell: {
        name: taco.shell_name,
        url: taco.shell_url,
        recipe: taco.shell_recipe
      },
      base: {
        name: taco.base_name,
        url: taco.base_url,
        recipe: taco.base_recipe
      },
      mixin: {
        name: taco.mix_name,
        url: taco.mix_url,
        recipe: taco.mix_recipe
      },
      condiment: {
        name: taco.cond_name,
        url: taco.con_url,
        recipe: taco.con_recipe
      },
      seasoning: {
        name: taco.sea_name,
        url: taco.sea_url,
        recipe: taco.sea_recipe
      }
    }
    return res.json(formattedTaco)
  })
})

module.exports = router