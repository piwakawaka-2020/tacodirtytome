import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import TacoSearch from './TacoSearch'
import TacoList from './TacoList'
import TacoDetail from './TacoDetail'

import { getRandomTaco, getRandomFullTaco } from '../api/externalTaco'

class App extends React.Component {
  state = {
    condiment: '',
    mixin: '',
    base_layer: '',
    shell: '',
    seasoning: ''
  }

  randomOnClickHandler = event => {
    getRandomTaco()
    .then((taco) => {
      // console.log(taco)
      this.setState({
        condiment: taco.condiment,
        mixin: taco.mixin,
        base_layer: taco.base_layer,
        shell: taco.shell,
        seasoning: taco.seasoning
      })
    })
  }

  fullOnClickHandler = event => {
    getRandomFullTaco()
    .then((taco) => {
      // console.log(taco)
      this.setState({
        condiment: taco.condiment,
        mixin: taco.mixin,
        base_layer: taco.base_layer,
        shell: taco.shell,
        seasoning: taco.seasoning
      })
    })
  }

  render(){
    return (
      <Router>
        <div className="block">
          <nav className="navbar">
            <div className="navbar-brand">
              <Link to="" className="navbar-item has-background-primary">
                <h1 className="title is-3 ">Tacodirtytome</h1>
              </Link>
            </div>
          </nav>
        </div>
        <div>
          <button className="button" onClick={this.randomOnClickHandler.bind(this)}> Get Random Taco </button>
          {/* <button className="button" onClick={this.fullOnClickHandler.bind(this)}> Get Full Random Taco </button> */}
        </div>
        <Route to='/' render={(props) => (<TacoSearch {...props} data={this.state} />)} />
        <Route to='/list' component={TacoList}/>
        <Route to='/list/:id' component={TacoDetail}/>
      </Router>
    )
  }
}

export default App

