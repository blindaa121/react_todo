import React from 'react';
import ReactDOM from 'react-dom'
// import root from './components/root'
import configureStore from './store/store';
import { receiveTodo, receiveTodos } from './actions/todo_actions'
import Root from './components/root'
import { getAllTodos } from './reducers/selectors'

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const root = document.getElementById("content")
    ReactDOM.render(<Root store={store}/>, root)
    window.store = store
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.getAllTodos = getAllTodos;
});