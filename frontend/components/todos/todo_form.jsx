import React from 'react';
import { uniqueId } from '../../util/unique_id'

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            body: "",
            done: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(property) {
        return e => this.setState({[property]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const todo = Object.assign({}, this.state, { id: uniqueId() });
        this.props.receiveTodo(todo);
        this.setState({
            title: "",
            body: ""
        })
    }
   
    render() {
        return (
            <form className='todo-form' onSubmit={this.handleSubmit}>
                <label>Title:
                    <input
                        className='input'
                        ref='title'
                        value={this.state.title}
                        placeholder="buy milk"
                        onChange={this.update('title')}/>
                </label>
                <label>Body:
                    <input
                        className='input'
                        ref='body'
                        value={this.state.body}
                        placeholder="This better be some fine silk milk"
                        onChange={this.update('body')} />
                </label>
                <button className='create-button'>Create Todo!</button>
            </form>
        )
    }

}

export default TodoForm;