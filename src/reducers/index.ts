import { combineReducers } from 'redux'
import counter from './counter'
import todo from './todos';
import global from './global';

export default combineReducers({
  counter,
  todo,
  global,
})
