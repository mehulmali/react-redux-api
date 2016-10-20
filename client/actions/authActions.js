/**
 * Created by User on 10/19/2016.
 */

import axios from 'axios';

export function login(data) {
    return dispatch => {
        return axios.post('/api/auth', data)
    }
}