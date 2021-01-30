import * as types from '../constants/todo';
import callApi from '../utils/call-api';
import fetch from "isomorphic-fetch";

export function fetchTodo() {
    return (dispatch, getState) => {
        const {token} = getState().auth;

        dispatch({
            type: types.FETCH_TODO_REQUEST
        })
        // return callApi('/todo', token)
        //     .then(data => dispatch({
        //         type: types.FETCH_TODO_SUCCESS,
        //         payload: data
        //     }))
        //     .catch(reason => dispatch({
        //         type: types.FETCH_TODO_FAILURE,
        //         payload: reason
        //     }))
        return fetch(`https://uxcandy.com/~shapoval/test-task-backend/v2?developer=Alex`)
            .then(response => {
                return response.json()
            })
            .then(json => {
                if (json.status === 'ok') {
                    dispatch({
                        type: types.FETCH_TODO_SUCCESS,
                        payload: json.message.tasks
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
