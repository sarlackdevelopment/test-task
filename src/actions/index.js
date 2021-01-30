import * as types from '../constants/auth';
import callApi from '../utils/call-api';
import fetch from "isomorphic-fetch";

export function signup(email, password, repeatPassword){
    return (dispatch) => {
        dispatch({
            type: types.SIGNUP_REQUEST
        })
        return callApi('/signup', undefined, {method: "POST"},{
            email,
            password,
            repeatPassword
        })
            .then(json => {
                if (!json.token) {
                    throw new Error('Джок токен!');
                }
                localStorage.setItem('token', json.token);
                dispatch({
                    type: types.SIGNUP_SUCCESS,
                    payload: json
                })
            })
            .catch(reason => dispatch({
                type: types.SIGNUP_FAILURE,
                payload: reason
            }));
    };
}

//export function login(username, password){
export function login(formData){
    return (dispatch) => {
        dispatch({
            type: types.LOGIN_REQUEST
        })
        // return callApi('/login', undefined, {method: "POST"}, {
        //     username,
        //     password
        // })
        // return callApi('/login', undefined, {method: "POST"}, formData)
        //     .then(json => {
        //         if (!json.message.token) {
        //             throw new Error('Джок токен!');
        //         }
        //         localStorage.setItem('token', json.message.token);
        //
        //         dispatch({
        //             type: types.LOGIN_SUCCESS,
        //             payload: json
        //         })
        //     })
        //     .catch(reason => {
        //         return dispatch({
        //             type: types.LOGIN_FAILURE,
        //             payload: reason
        //         })
        //     });

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
                    return json;
                }
                throw new Error(json.message);
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
            type: types.LOGOUT_REQUEST
        })
    };
}

export function recieveAuth() {
    return(dispatch, getState) => {
        const {token} = getState().auth;
        if (!token) {
            dispatch({
                type: types.RECIEVE_AUTH_FAILURE
            })
        }
        return callApi('/userauth', token)
            .then(json => {
                dispatch({
                    type: types.RECIEVE_AUTH_SUCCESS,
                    payload: json
                })
            })
            .catch(reason => dispatch({
                type: types.RECIEVE_AUTH_FAILURE,
                payload: reason
            }));
    }
}
