import { toggled } from "../todos/actions";


export const updateCompletion = (todoId, currentStatus) => {
    return async (dispatch) => {
        const res = await fetch(`http://localhost:4000/todos/${todoId}`, {
            method: 'PATCH',
            headers: {
                'Content-type' : 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                completed: !currentStatus
            })
        });

        const todo = await res.json();

        dispatch(toggled(todo.id))

    }
}