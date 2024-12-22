import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { useEffect } from "react";
import { fetchTodos } from "../redux/thunk/fetchTod";



export default function TodoList() {

    const todos = useSelector(state => state.todos);
    const filters = useSelector(state => state.filters);
    const {status, colors} = filters;

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchTodos)

    }, [dispatch])

    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            { todos
            .filter(todo => {
                switch (status) {
                    case 'Complete':                        
                        return todo.completed;
                    case 'Incomplete':                    
                        return !todo.completed;                
                    default:
                        return true;
                }
            })
            .filter(todo => {
                if(colors.length > 0){
                   return colors.includes(todo.color)
                }
                return true;
            })
            .map(todo => (

                <Todo key={todo.id} todo={todo}/>
            ))
            }
        </div>
    );
}
