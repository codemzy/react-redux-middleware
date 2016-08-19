import { FETCH_USERS } from './types';

let dummyData = [
        { name: 'user1' },
        { name: 'user2' },
        { name: 'user3' }
    ];

export function fetchUsers() {
    return {
        type: FETCH_USERS,
        payload: dummyData
    };
}