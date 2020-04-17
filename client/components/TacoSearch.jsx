import React from 'react'

import { addTaco } from '../api/internalTaco'

class TacoSearch extends React.Component {
  constructor(props){
    super(props)

  }
  
  renderTaco(taco) {
    return (
      <div className='container'>
        <h2 className='title'>Condiment: {taco.condiment.name}</h2>
        <p>{taco.condiment.recipe}</p>
        <br/>
        <h2 className='title'>Mixin: {taco.mixin.name}</h2>
        <p>{taco.mixin.recipe}</p>
        <br/>
        <h2 className='title'>Base layer: {taco.base_layer.name}</h2>
        <p>{taco.base_layer.recipe}</p>
        <br/>
        <h2 className='title'>Shell: {taco.shell.name}</h2>
        <p>{taco.shell.recipe}</p>
        <br/>
        <h2 className='title'>Seasoning: {taco.seasoning.name}</h2>
        <p>{taco.seasoning.recipe}</p>
        <br/>
        <button className='button' onClick={this.saveTaco(taco)}>Save this taco</button>
      </div>
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