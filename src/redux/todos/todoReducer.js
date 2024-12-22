import { ADDED, TOGGLED, COLORSELECTED, CLEARCOMPLETED, ALLCOMPLETED, DELETED, LOADED } from "./actionTypes";



const initialState = []

const todoReducer = (state = initialState, action) => {
    // const nextId = (state) => {
    //     const maxId = state.reduce((maxId, currentState)=> Math.max(maxId, currentState.id), -1);
    //     return maxId + 1;
    // }

    switch (action.type) {
        case LOADED:

            return action.payload

        case ADDED:
            
            return [...state, {
                todoTitle: action.payload,
                // id: nextId(state)           
            }];
        
        case TOGGLED:
            
            return state.map(todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }

                return todo;
            })
        case COLORSELECTED:
            const {todoId, color} = action.payload;

            return state.map(todo => {
                if(todoId === todo.id){
                    return {
                        ...todo,
                        color
                    }
                }
                return todo;
            })
        case ALLCOMPLETED:
            
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                }
            })
        case DELETED:
            
            return state.filter(todo => todo.id !== action.payload);
            
        case CLEARCOMPLETED:
            
           return state.filter(todo => !todo.completed) 

        default:
            return  state;
    }
}

export default todoReducer;