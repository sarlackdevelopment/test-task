import {combineReducers} from 'redux';
import * as types from '../constants/todo';

const initialState = {
    todo: []
    // todoIds: [],
    // byIds: {}
};

// const todoIds = (state = initialState.todoIds, action) => {
//     switch (action.type) {
//         case types.FETCH_TODO_SUCCESS:
//             //return action.payload.todo.map(getTodoId);
//             //return action.payload.map(getTodoId);
//             return action.payload
//         default:
//             return state;
//     }
// }

const todo = (state = initialState.todo, action) => {
    switch (action.type) {
        case types.FETCH_TODO_SUCCESS:
            //return action.payload.todo.map(getTodoId);
            //return action.payload.map(getTodoId);
            return action.payload
        default:
            return state;
    }
}

// const byIds = (state = initialState.byIds, action) => {
//     switch (action.type) {
//         case types.FETCH_TODO_SUCCESS:
//             return {
//                 ...state,
//                 ...action.payload.todo.reduce((ids, todo) => ({
//                     ...ids,
//                     [todo._id] : todo
//                 }), {}),
//                 //...action.payload,
//             }
//         default:
//             return state;
//     }
// }

// export default combineReducers({
//     todoIds,
//     byIds
// })
export default combineReducers({
    todo
})

// export const getTodoId = (todo) => todo.id;
// export const getByIds = (state, ids) => {
//     ids.map(id => state.byIds[id]);
// }
