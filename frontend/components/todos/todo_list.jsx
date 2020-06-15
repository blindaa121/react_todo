import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = ({ todos }) => {
    return (
        <div>
            <ul>
                {
                    todos.map(todo => (
                        <TodoListItem key={todo.id} todo={todo} />
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList;