import {
  SET_TODO,
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  VISIBLE,
  CLEAR_COMPLETE_TODO,
  EDIT_TODO
 } from '../constants/todo';


const INITIAL_STATE = {
  todos: [],
  visibilityFilter: 'All'
}

export default function todo (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        todos: action.payload.todos
      }
     case ADD_TODO:
       return {
         ...state,
         todos: [
           ...state.todos,
           {
            id: state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            completed: false,
            text: action.payload,
           }
         ]
       }
     case VISIBLE:
       return {
         ...state,
         visibilityFilter: action.payload.text,
       }
     case DELETE_TODO:
       return {
         ...state,
         todos: state.todos.filter(item => item.id !== action.payload.id),
       }
     case COMPLETE_TODO:
       return {
         ...state,
         todos: state.todos.map(item=> item.id === action.payload.id ? {...item ,completed: !item.completed } : item),
       }
     case CLEAR_COMPLETE_TODO:
       return {
         ...state,
         todos: state.todos.filter(t => t.completed === false)
       }
      case EDIT_TODO:
        return {
          ...state,
          todos: state.todos.map(item => (item.id === action.payload.id ? { ...item, text: action.payload.text } : item))
        }
     default:
       return state
  }
}
