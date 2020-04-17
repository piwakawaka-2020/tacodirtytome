import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import TacoSearch from './TacoSearch'
import TacoList from './TacoList'
import TacoDetail from './TacoDetail'

import { getRandomTaco, getRandomFullTaco } from '../api/taco'

class App extends React.Component {
  state = {
    condiment: '',
    mixin: '',
    base_layer: '',
    shell: '',
    seasoning: ''
  }

  onClickHandler = event => {
    getRandomTaco()
    .then((taco) => {
      console.log(taco)
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
          <button className="button" onClick={this.onClickHandler.bind(this)}> Get Random Taco </button>
        </div>
        <Route to='/' component={TacoSearch}/>
        <Route to='/list' component={TacoList}/>
        <Route to='/list/:id' component={TacoDetail}/>
      </Router>
    )
  }
}

export default App

