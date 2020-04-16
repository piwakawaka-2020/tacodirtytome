import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import TacoSearch from './TacoSearch'
import TacoList from './TacoList'
import TacoDetail from './TacoDetail'

import { getRandomTaco } from '../api/taco'

class App extends React.Component {

  render(){
    return (
      <Router>
        <h1>Tacodirtytome</h1>
        <Route to='/' component={TacoSearch}/>
        <Route to='/list' component={TacoList}/>
        <Route to='/list/:id' component={TacoDetail}/>
      </Router>
    )
  }
}

export default App

