import React from 'react';
import ReactDOM from 'react-dom'
// import root from './components/root'
import configureStore from './store/store';
import { receiveTodo, receiveTodos } from './actions/todo_actions'


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("content")
    ReactDOM.render(<h1>Todos App</h1>, root)

    const store = configureStore();
    window.store = store
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
});