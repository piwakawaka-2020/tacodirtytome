import React from 'react'

import {getAllTacos} from '../api/internalTaco'

class TacoList extends React.Component {
    state = {
        tacoList: []
    }

    componentDidMount() {
        getAllTacos().then(tacos => {
            this.setState({tacoList: tacos})
        })
    }

    render() {
        return (
            <div>
            <h1 className='has-text-primary'>TacoList</h1>
            <ul>
                {this.state.tacoList.map(taco => <li key={taco.id}>{taco.name}</li>)}
            </ul>
            </div>
        )
    }
}

export default TacoList