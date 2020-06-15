import React from 'react';

const TodoDetailView = ({ todo, removeTodo }) => {
    return (
        <div>
            <span className="todo-body">{todo.body}</span>
            <button
                className='delete-button'
                onClick={ removeTodo }>
                Delete Todo
            </button>
        </div>
    )
}

export default TodoDetailView;