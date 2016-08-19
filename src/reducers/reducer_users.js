import { FETCH_USERS } from '../actions/types';

export default function(state = [], action) {
    if (action.type === FETCH_USERS) {
        return [
            ...state,
            ...action.payload
        ];
    }
    return state;
}