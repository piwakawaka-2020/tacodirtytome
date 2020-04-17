import React from 'react'

import { addTaco } from '../api/internalTaco'

class TacoSearch extends React.Component {
  constructor(props){
    super(props)

  }
  
  renderTaco(taco) {
    return (
      <>
        <p>Condiment: {taco.condiment.name}</p>
        <p>Mixin: {taco.mixin.name}</p>
        <p>Base layer: {taco.base_layer.name}</p>
        <p>Shell: {taco.shell.name}</p>
        <p>Seasoning: {taco.seasoning.name}</p>
      </>
    )
  }

  saveTaco(taco) {
    const newTaco = {
      base_layer: {
        base_name: taco.base_layer.name,
        base_url: taco.base_layer.url,
        base_recipe: taco.base_layer.recipe
      },
      mixin: {
        mix_name: taco.mixin.name,
        mix_url: taco.mixin.url,
        mix_recipe: taco.mixin.recipe
      },
      shell: {
        shell_name: taco.shell.name,
        shell_url: taco.shell.url,
        shell_recipe: taco.shell.recipe
      },
      condiment: {
        con_name: taco.condiment.name,
        con_url: taco.condiment.url,
        con_recipe: taco.condiment.recipe
      },
      seasonings: {
        sea_name: taco.seasoning.name,
        sea_url: taco.seasoning.url,
        sea_recipe: taco.seasoning.recipe
      }
    }
    addTaco(newTaco)
  }


  render(){
    const taco = this.props.data
    console.log(taco)
    return (
      <>
      {this.props.data.mixin ? this.renderTaco(taco) : <img id='tacoImg' src='images/dancingtaco.gif' /> }
      <br></br>
      <button className='button' onClick={this.saveTaco(taco)}>Save this taco</button>
      </>
    )
  }
}

export default TacoSearch

// Format for addTaco:
// {
//     "base_layer": {
//         "base_name": "taco test",
//         "base_url": "www.tacos",
//         "base_recipe": "Taco taco taco"
//     },
//     "mixin": {
//         "mix_name": "mix",
//         "mix_url": "www.mix",
//         "mix_recipe": "mix it up"
//     },
//     "shell": {
//         "shell_name": "taco test",
//         "shell_url": "www.tacos",
//         "shell_recipe": "Taco taco taco"
//     },
//     "condiment": {
//         "con_name": "mix",
//         "con_url": "www.mix",
//         "con_recipe": "mix it up"
//     },
//     "seasonings": {
//         "sea_name": "taco test",
//         "sea_url": "www.tacos",
//         "sea_recipe": "Taco taco taco"
//     }
// }