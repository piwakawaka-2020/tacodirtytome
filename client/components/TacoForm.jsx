import React from 'react'

class TacoForm extends React.Component {
    render() {
        return (
            <form>
                <label class='label field'>
                    Base Layer:
                    <input class='input' type='text' name='base_layer' placeholder='Name' />
                    <textarea class='textarea' name='base_layer_recipe' placeholder='Instructions' />
                </label>
                <br></br>
                <label class='label'>
                    Mixin:
                    <input class='input' type='text' name='mixin' placeholder='Name' />
                    <textarea class='textarea' name='mixin_recipe' placeholder='Instructions' />
                </label>
                <br></br>
                <label class='label'>
                    Shell:
                    <input class='input' type='text' name='shell' placeholder='Name' />
                    <textarea class='textarea' name='shell_recipe' placeholder='Instructions' />
                </label>
                <br></br>
                <label class='label'>
                    Condiment:
                    <input class='input' type='text' name='condiment' placeholder='Name' />
                    <textarea class='textarea' name='condiment_recipe' placeholder='Instructions' />
                </label>
                <br></br>
                <label class='label'>
                    Seasonings:
                    <input class='input' type='text' name='seasoning' placeholder='Name' />
                    <textarea class='textarea' name='seasoning_recipe' placeholder='Instructions' />
                </label>
            </form>
        )
    }
}

export default TacoForm