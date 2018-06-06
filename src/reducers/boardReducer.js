
import initialState from './initialState';
import { CREATE_BOARD_ACTION, ADD_LIST_TO_BOARD_ACTION } from '../actions/actions';

export default function boardReducer(state = initialState.boards, action) {
    switch (action.type) {
        case CREATE_BOARD_ACTION:
            return [...state, Object.assign({}, action.payload)]
        case ADD_LIST_TO_BOARD_ACTION:
            return state.map(b => {
                const boardCopy = Object.assign({}, b);
                if (boardCopy.name === action.payload.boardName) {
                    boardCopy.lists = [...boardCopy.lists, action.payload.list];
                }

                return boardCopy;
            });
        default:
            return state;
    }
}