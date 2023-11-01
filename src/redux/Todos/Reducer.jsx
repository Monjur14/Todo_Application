import initialState from './InitialState'
import {ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED} from './ActionType'

const nextTodoId = (todos) => {
    const maxId = todos.reducer((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state)
                    //should be here: text: action.payload
                }
            ]
            
        case TOGGLED:
            return state.map(todo => {
                if(todo.id !== action.payload){
                    return todo;
                }
                else return {
                    ...todo,
                    completed: !todo.completed
                }
            })
            
        case COLORSELECTED:
            // eslint-disable-next-line no-case-declarations
            const {todoId, color} = action.payload
            return state.map((todo) => {
                if(todo.id !== todoId){
                    return todo;
                }
                return {
                    ...todo,
                    color: color
                }
            })

        case DELETED:
            return state.filter((todo) => {
               return todo.id !== action.payload
            })

        case ALLCOMPLETED:
            return state.map((todo) => {
                return {
                    ...todo,
                    completed: true
                }
            })

        case CLEARCOMPLETED:
            return state.filter((todo) => {
                return !todo.completed
            })

        default:
            return state;
    }
}

export default reducer