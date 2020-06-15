import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container'


class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: false
        }
        this.toggleTodo = this.toggleTodo.bind(this);
        this.toggleDetails = this.toggleDetails.bind(this);
    }

    toggleDetails(e) {
        e.preventDefault();
        this.setState({ details: !this.state.details })
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
                <li><a onClick={this.toggleDetails}>{todo.title}</a></li>
                {/* <button onClick={() => removeTodo({id: todo.id})}>Remove</button> */}
                <button onClick={ this.toggleTodo }>
                    { todo.done ? "Undo" : "Done" }
                </button>
                { this.state.details ? <TodoDetailViewContainer todo={todo} /> : null }
            </div>
        )
    }
    
}

export default TodoListItem;