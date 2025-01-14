import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../redux/filters/actions";

export default function Footer() {
    const todos = useSelector(state => state.todos);  
    const filters = useSelector(state => state.filters);  
    const incompleteTodos = todos.filter(todo => !todo.completed).length;

    const dispatch = useDispatch()

    const numberOfTodos = (todosNumber) => {
        switch (todosNumber) {
            case 0:               
                return 'No task'
            case 1:               
                return '1 task'
            
        
            default:
                return `${todosNumber} tasks`;
        }
    }

    const {status, colors} = filters;

    const handleColorFilter = (color) => {
        if(colors.includes(color)){
            dispatch(colorChanged(color,'removed'))
        }else{
            dispatch(colorChanged(color, 'added'))
        }
    }

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{numberOfTodos(incompleteTodos)} left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li onClick={() => dispatch(statusChanged('All'))} className={`cursor-pointer ${status === 'All' && 'font-bold'}`}>All</li>
                <li>|</li>
                <li onClick={() => dispatch(statusChanged('Incomplete'))} className={`cursor-pointer ${status === 'Incomplete' && 'font-bold'}`}>Incomplete</li>
                <li>|</li>
                <li onClick={() => dispatch(statusChanged('Complete'))} className={`cursor-pointer ${status === 'Complete' && 'font-bold'}`}>Complete</li>
                <li></li>
                <li></li>
                <li onClick={() => handleColorFilter('green')} className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green') && 'bg-green-500'}`}></li>
                <li onClick={() => handleColorFilter('red')} className={`h-3 w-3 border-2 border-green-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') && 'bg-red-500'}`}></li>
                <li onClick={() => handleColorFilter('yellow')} className={`h-3 w-3 border-2 border-green-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes('yellow') && 'bg-yellow-500'}`}></li>
            </ul>
        </div>
    );
}
