import React from 'react';
import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions'

const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
};

const todosReducer = ( oldState = initialState, action ) => {
    Object.freeze(oldState);
    let nextState = {};
    switch (action.type) {
        case RECEIVE_TODOS:
            action.todos.forEach( todo => {
                nextState[todo.id] = todo;
            });
            return nextState;
        case RECEIVE_TODO:
            const newTodo = { [action.todo.id]: action.todo };
            return Object.assign({}, oldState, newTodo);
        case REMOVE_TODO:
            nextState = Object.assign({}, oldState);
            delete nextState[action.todo.id];
            return nextState;
        default:
            return oldState;
    }
}

export default todosReducer;