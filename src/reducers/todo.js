import {combineReducers} from 'redux';
import * as types from '../constants/todo';

const initialState = {
    total_task_count: 0,
    tasks: []
};

const todo = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_TODO_SUCCESS:
            return action.payload
        default:
            return state;
    }
}

export default combineReducers({todo})
