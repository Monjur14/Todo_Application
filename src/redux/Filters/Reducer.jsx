import {COLORCHECK, STATUSCHECK} from './ActionTypes'
import initialState from './InitialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUSCHECK:
            return {
               ...state,
               status: action.payload
            }
            
        case COLORCHECK:
            // eslint-disable-next-line no-case-declarations
            const {color, changeType} = action.payload

            switch (changeType) {
                case 'added':
                    return {
                        ...state,
                        colors: {
                            ...state.colors,
                            color
                        }
                    }
                case 'removed':
                    return {
                        ...state,
                        colors: state.colors.filter(existingColor => existingColor !== color)
                    }
                default:
                   return state;
            }
    
        default:
            return state;
    }
}

export default reducer