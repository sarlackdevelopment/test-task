import * as types from '../constants/auth';
import fetch from "isomorphic-fetch";

export function login(formData){
    return (dispatch) => {
        dispatch({
            type: types.LOGIN_REQUEST
        })

        return fetch(`https://uxcandy.com/~shapoval/test-task-backend/v2/login?developer=Alex`,
            {
                method: 'POST',
                body: formData
            })
            .then(response => {
                return response.json()
            })
            .then(json => {
                if (json.status === 'ok') {
                    localStorage.setItem('token', json.message.token);
                    dispatch({
                        type: types.LOGIN_SUCCESS,
                        payload: json
                    })
                }
            })
            .catch(reason => {
                return dispatch({
                    type: types.LOGIN_FAILURE,
                    payload: reason
                })
            });
    };
}

export function logout(){
    return (dispatch) => {
        dispatch({
            type: types.LOGOUT_SUCCESS
        })
    };
}
