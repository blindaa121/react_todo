import todosReducer from './todos_reducer';
import stepsReducer from './steps_reducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todos: todosReducer,
    steps: stepsReducer
})

export default rootReducer;
