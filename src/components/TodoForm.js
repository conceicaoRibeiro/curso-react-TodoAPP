import React from 'react';

export default class TodoForm extends React.Component {
    state = {
        inputValue: ""
    }

    onChangeHandleInput(e) {
        const { value } = e.target;
        this.setState({
            inputValue: value
        })
    }

    onClickSave(e) {
        const newTodo = this.state.inputValue;
        this.props.onSaveTodo(newTodo);

        this.setState({
            inputValue: ""
        })
    }


    render() {
        const { inputValue } = this.state;
        return (
            <React.Fragment>
                <input
                    value={inputValue}
                    onChange={e => this.onChangeHandleInput(e)} />
                <button onClick={(e) => this.onClickSave(e)}>Salvar</button>
            </React.Fragment>
        );
    }
}