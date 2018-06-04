import { CREATE_BOARD_ACTION } from './actions';

export function addNewBoard(newBoard) {
    return { type: CREATE_BOARD_ACTION, payload: newBoard };
}
