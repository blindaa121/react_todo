import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions';

const initialState = {
    1: {id: 1,
    title: 'walk to the store',
    done: false,
    todoId: 1},

    2: {
        id: 2,
        title: 'drive to the car wash',
        done: false,
        todoId: 2
    }
}

const stepsReducer = (oldState = initialState, action) => {
    Object.freeze(oldState);
    let nextState = {}
    switch (action.type) {
        case RECEIVE_STEPS:
            return action.steps;
        case RECEIVE_STEP:
            const newStep = { [action.step.id]: action.step };
            return Object.assign({}, oldState, newStep)
        case REMOVE_STEP:
            nextState = Object.assign({}, oldState);
            delete nextState[action.step.id];
            return nextState;
        default:
            return oldState;
    }
}

export default stepsReducer