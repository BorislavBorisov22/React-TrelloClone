
import { CREATE_BOARD_ACTION, SET_ACTIVE_BOARD_ACTION } from './actions';

export function addNewBoard(newBoard) {
    return { type: CREATE_BOARD_ACTION, payload: newBoard };
}

export function setActiveBoard(board) {
    return { type: SET_ACTIVE_BOARD_ACTION, payload: board };
}