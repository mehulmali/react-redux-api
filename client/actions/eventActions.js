import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';

import { SET_CURRENT_USER } from './types'

export function createEvent(event) {
    return dispatch => {
        return axios.post('/api/events', event);
    }
}