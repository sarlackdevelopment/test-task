import * as types from '../constants/todo';
import fetch from "isomorphic-fetch";

export function fetchTodo(page = 1, sort_field = 'id', sort_direction = 'asc') {
    return (dispatch) => {
        dispatch({
            type: types.FETCH_TODO_REQUEST
        })
        return fetch(`https://uxcandy.com/~shapoval/test-task-backend/v2?developer=Alex&page=${page}&sort_field=${sort_field}&sort_direction=${sort_direction}`)
            .then(response => {
                return response.json()
            })
            .then(json => {
                if (json.status === 'ok') {
                    dispatch({
                        type: types.FETCH_TODO_SUCCESS,
                        payload: json.message
                    })
                }
                throw new Error(json.message);
            })
            .catch(reason => dispatch({
                type: types.FETCH_TODO_FAILURE,
                payload: reason
            }))
    };
}

export function createTask(payload) {
    return (dispatch) => {
        dispatch({
            type: types.CREATE_TASK_REQUEST
        })
        return fetch(`https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=Alex`,
            {
                method: 'POST',
                body: payload
            })
            .then(response => {
                return response.json()
            })
            .then(json => {
                if (json.status === 'ok') {
                    dispatch({
                        type: types.CREATE_TASK_SUCCESS,
                        payload: json.message
                    })
                }
                throw new Error(json.message);
            })
            .catch(reason => dispatch({
                type: types.CREATE_TASK_FAILURE,
                payload: reason
            }))
    };
}
