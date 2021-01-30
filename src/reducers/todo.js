import {combineReducers} from 'redux';
import * as types from '../constants/todo';

const initialState = {
    todo: []
};

const todo = (state = initialState.todo, action) => {
    switch (action.type) {
        case types.FETCH_TODO_SUCCESS:
            return action.payload
        default:
            return state;
    }
}

export default combineReducers({todo})
