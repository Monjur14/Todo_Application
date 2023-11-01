import todoReducer from './Todos/Reducer'
import filterReducer from './Filters/Reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer  
});

export default rootReducer;