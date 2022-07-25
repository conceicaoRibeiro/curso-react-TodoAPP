import React from "react";
import ReactDOM from "react";
import App from './App';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default class TodoApp extends React.Component {

  state = {
    todos: [
      "Lavar a louça ",
      "Estudar react",
      "Dar 5 estrelas no curso"
    ],
  }
  constructor(props) {
    super(props);
  }

  onSaveTodo(newTodo) {
    const todoList = this.state.todos;
    this.setState({
      todos: [...todoList, newTodo],
    })

  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todo App</h1>
        <TodoForm
          onSaveTodo={newTodo => this.onSaveTodo(newTodo)} />
        <TodoList todos={todos}/>

      </div>
    );
  }
}
