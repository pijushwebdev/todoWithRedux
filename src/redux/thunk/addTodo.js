import { added } from "../todos/actions";

export const addTodo = (todoTitle) => {
    return async (dispatch, getState) => {
        const state = getState().todos;

        const nextId = (state) => {
            const maxId = state.reduce((maxId, currentState)=> Math.max(maxId, currentState.id), -1);
            return maxId + 1;
        }

        const res = await fetch(`http://localhost:4000/todos`, {
            method: 'POST',
            body: JSON.stringify({
                todoTitle,
                completed: false,
                id: nextId(state),
            }),
            headers: {
                "Content-type" : "application/json; charset=UTF-8"

            }
        })

        const todo = await res.json();
        
        dispatch(added(todo.todoTitle))

    }
}