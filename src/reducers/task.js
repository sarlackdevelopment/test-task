import {combineReducers} from 'redux';
import * as types from '../constants/todo';

const initialState = {
    newTask: {}
};

const task = (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_TASK_SUCCESS:
            return action.payload
        default:
            return state;
    }
}

export default combineReducers({task})
