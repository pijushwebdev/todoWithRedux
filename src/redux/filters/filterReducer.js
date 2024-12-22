import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";
const initialState = {
    status: 'All',
    colors: []
}
const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case COLORCHANGED:
            const { changeType, color } = action.payload;

            switch (changeType) {
                case 'added':
                    
                    return {
                        ...state,
                        colors: [
                            ...state.colors,
                            color
                        ],

                    }
                case 'removed':
                    return {
                        ...state,
                        colors: state.colors.filter(c => c !== color)
                    }
            
                default:
                    return state;
            }

        case STATUSCHANGED:
            
            return {
                ...state,
                status: action.payload
            };
    
        default:
            return state;
    }
}

export default filterReducer;