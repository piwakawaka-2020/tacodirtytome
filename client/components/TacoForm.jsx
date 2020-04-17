import React from 'react'

import {addTaco} from '../api/internalTaco'

class TacoForm extends React.Component {
    state = {
        base_layer: '',
        base_layer_recipe: '',
        mixin: '',
        mixin_recipe: '',
        shell: '',
        shell_recipe: '',
        condiment: '',
        condiment_recipe: '',
        seasoning: '',
        seasoning_recipe: ''
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        const tacoObject = {
            base_layer: {
                base_name: this.state.base_layer,
                base_recipe: this.state.base_layer_recipe
            },
            mixin: {
                mix_name: this.state.mixin,
                mix_recipe: this.state.mixin_recipe
            },
            shell: {
                shell_name: this.state.shell,
                shell_recipe: this.state.shell_recipe
            },
            condiment: {
                con_name: this.state.condiment,
                con_recipe: this.state.condiment_recipe
            },
            seasonings: {
                sea_name: this.state.seasonings,
                sea_recipe: this.state.seasonings_recipe
            }
        }
    
        // Send the data to the API
        addTaco(tacoObject)
        .then(() => {
          // Reset the form
          this.setState({
            base_layer: '',
            base_layer_recipe: '',
            mixin: '',
            mixin_recipe: '',
            shell: '',
            shell_recipe: '',
            condiment: '',
            condiment_recipe: '',
            seasoning: '',
            seasoning_recipe: ''
          })
    
        })
    
    
    
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label class='label field'>
                    Base Layer:
                    <input class='input' type='text' name='base_layer' placeholder='Name' onChange={this.handleChange}/>
                    <textarea class='textarea' name='base_layer_recipe' placeholder='Instructions' onChange={this.handleChange}/>
                </label>
                <br></br>
                <label class='label'>
                    Mixin:
                    <input class='input' type='text' name='mixin' placeholder='Name' onChange={this.handleChange}/>
                    <textarea class='textarea' name='mixin_recipe' placeholder='Instructions' onChange={this.handleChange}/>
                </label>
                <br></br>
                <label class='label'>
                    Shell:
                    <input class='input' type='text' name='shell' placeholder='Name' onChange={this.handleChange}/>
                    <textarea class='textarea' name='shell_recipe' placeholder='Instructions' onChange={this.handleChange}/>
                </label>
                <br></br>
                <label class='label'>
                    Condiment:
                    <input class='input' type='text' name='condiment' placeholder='Name' onChange={this.handleChange}/>
                    <textarea class='textarea' name='condiment_recipe' placeholder='Instructions' onChange={this.handleChange}/>
                </label>
                <br></br>
                <label class='label'>
                    Seasonings:
                    <input class='input' type='text' name='seasonings' placeholder='Name' onChange={this.handleChange}/>
                    <textarea class='textarea' name='seasonings_recipe' placeholder='Instructions' onChange={this.handleChange}/>
                </label>
                <input class="button is-link is-light" type="submit" value="Add Recipe"/>
            </form>
        )
    }
}

export default TacoForm