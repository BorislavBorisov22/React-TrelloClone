
import initialState from './initialState';
import { CREATE_BOARD_ACTION } from '../actions/actions';

export default function boardReducer(state = initialState.boards, action) {
    switch (action.type) {
        case CREATE_BOARD_ACTION:
            return [...state, Object.assign({}, action.payload)];
        default:
            return state;
    }
}