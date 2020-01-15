import {
  ADD_TODO,
  SET_TODO,
  VISIBLE,
  DELETE_TODO,
  COMPLETE_TODO,
  CLEAR_COMPLETE_TODO,
  EDIT_TODO,
} from '../constants/todo'

export const set = (todos) => {
  return {
    type: SET_TODO,
    payload: {
      todos
    }
  }
}


export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      text,
    }
  }
}


export const setVisibilityFilter = (text) => {
  return {
    type: VISIBLE,
    payload: {
      text,
    }
  }
}


export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    }
  }
}


export const completeTodo = (id) => {
  return {
    type: COMPLETE_TODO,
    payload: {
      id,
    }
  }
}


export const clearCompletedTodos = () => {
  return {
    type: CLEAR_COMPLETE_TODO,
    payload: {},
  }
}


export const editTodo = (id,text) => {
  return {
    type: EDIT_TODO,
    payload: {
      id,
      text,
    }
  }
}
