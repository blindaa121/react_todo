import React from 'react';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTodo = this.toggleTodo.bind(this);
    }
    
    toggleTodo(e) {
        e.preventDefault();
        const toggledTodo = Object.assign({}, this.props.todo, { done: !this.props.todo.done });
        this.props.receiveTodo(toggledTodo)
    }

    render () {
        const { todo, removeTodo } = this.props;
        return (
            <div>
                <li>{todo.title}</li>
                <button onClick={() => removeTodo({id: todo.id})}>Remove</button>
                <button onClick={ this.toggleTodo }>
                    { todo.done ? "Undo" : "Done" }
                </button>
            </div>
        )
    }
    
}

export default TodoListItem;