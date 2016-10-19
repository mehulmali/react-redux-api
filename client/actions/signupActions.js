/**
 * Created by User on 10/19/2016.
 */

import axios from 'axios';

const API_URL = 'https://api-mean.herokuapp.com';

export function userSignupRequest(userData) {
    return dispatch => {
        return axios.post('/api/users', userData)
    }
}