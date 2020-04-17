import React from 'react'

import {getTacoById} from '../api/internalTaco'

class TacoDetail extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      // id:props.match.params.id,
      shell: {
        name: "",
        url: "",
        recipe: "",
      },
      base: {
        name: "",
        url: "",
        recipe: "",
      },
      mixin: {
        name: "",
        url: "",
        recipe: "",
      },
      condiment: {
        url: "",
        recipe: "",
      },
      seasoning: {
        name: "",
        url: "",
        recipe: "",
      }
    }
  }

  componentDidMount() {
    getTacoById(this.state.id)
    .then((details) => {
      this.setState({
        shell: details.shell,
        base: details.base,
        mixin: details.mixin,
        condiment: details.condiment,
        seasoning: details.seasoning
      })
    })
  }
  render(){
    return (
      <div>
        {/* {this.state} */}
      </div>
    )
  }
}

export default TacoDetail