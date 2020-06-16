export const getAllTodos = ({ todos }) => (
    Object.keys(todos).map(id => todos[id])
)

export const stepsByTodoId = ( {steps}, todoId) => {
    const stepsByTodoId = [];
    Object.keys(steps).forEach(stepId => {
        const step = steps[stepId];
        if (steps[stepId].todo_id === todoId) stepsByTodoId.push(step)
    })
    return stepsByTodoId;
}