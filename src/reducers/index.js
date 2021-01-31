import {combineReducers} from 'redux';
import auth from './auth';
import todo from './todo';
import task from './task';

export default combineReducers({
    auth,
    todo,
    task
});
