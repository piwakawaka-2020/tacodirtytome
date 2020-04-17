import React from 'react'

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


  render(){
    const taco = this.props.data
    return (
      <>
      {taco != undefined ? this.renderTaco(taco) : <p>please wait while loading</p> }
      </>
    )
  }
}

export default TacoSearch