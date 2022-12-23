import { createStore } from 'redux';
import { combineReducers } from 'redux';
import todoReducer from '../modules/todos';
const rootReducer = combineReducers({ todoReducer });
const store = createStore(rootReducer);

export default store;
