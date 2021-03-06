import * as types from '../constants';

const token = localStorage.getItem('token');

const initialState = {
    isAuthenticated: !!token,
    token,
};

export default function auth(state = initialState, action) {
    switch(action.type){
        case types.SIGNUP_SUCCESS:
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload.token
            };
        case types.RECIEVE_AUTH_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case types.SIGNUP_FAILURE:
        case types.LOGIN_FAILURE:
        case types.RECIEVE_AUTH_FAILURE:
        case types.LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: '',
            };
        default:
            return state;
    }
}
