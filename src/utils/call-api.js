import fetch from 'isomorphic-fetch';

export default function callApi({endpoint, token, options, payload}) {
    // console.log(payload.get('username'));
    // console.log(payload.get('password'));
    const authHeaders = token ? {
        'Authorization' : `Bearer ${token}`
    } : {};
    //return fetch(`http://localhost:5000${endpoint}`, {
    // return fetch(`https://uxcandy.com/~shapoval/test-task-backend/v2${endpoint}?developer=Alex`, {
    //     method: 'GET',
    //     //method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-type': 'application/json',
    //         'Mime-type': "multipart/form-data",
    //         'Access-Control-Allow-Headers': '*',
    //         ...authHeaders
    //     },
    //     mode: 'cors',
    //     body: JSON.stringify(payload),
    //     ...options
    // })
    //     .then(response => response.json())
    //     .then(json => {
    //         if (json.success) {
    //             return json;
    //         }
    //         throw new Error(json.message);
    //     })
    return fetch(`https://uxcandy.com/~shapoval/test-task-backend/v2${endpoint}?developer=Alex`,
        {
            method: 'POST',
            headers: {...authHeaders},
            body: payload
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
}
