import React from 'react';
import TodoListContainer from './components/todos/todo_list_container'

const App = () => {
    return (
        <div className='app'>
            <h1>Knock out those daily tasks!</h1>
            <TodoListContainer /> 
        </div> 
    )
}

export default App;