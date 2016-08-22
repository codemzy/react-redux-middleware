import axios from 'axios';

import { FETCH_USERS } from './types';

export function fetchUsers() {
    // ajax request with axios
    const REQUEST = axios.get('https://jsonplaceholder.typicode.com/users');
    return {
        type: FETCH_USERS,
        payload: REQUEST
    };
}