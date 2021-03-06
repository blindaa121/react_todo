import { getAllTodos } from '../../reducers/selectors';
import { connect } from 'react-redux';
import { receiveTodo, removeTodo } from '../../actions/todo_actions'
import TodoList from './todo_list'

const mapStateToProps = state => ({
    todos: getAllTodos(state)
})

const mapDispatchToProps = dispatch => ({
    receiveTodo: todo => dispatch(receiveTodo(todo)),
    removeTodo: todo => dispatch(removeTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)