import React from "react";
import ReactDOM from "react";
import App from './App';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const TodoApp = props => {
  return (
    <div className="container">
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}
export default TodoApp;