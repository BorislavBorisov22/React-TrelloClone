
import { CREATE_BOARD_ACTION, ADD_LIST_TO_BOARD_ACTION } from './actions';

export function addNewBoard(newBoard) {
    return { type: CREATE_BOARD_ACTION, payload: newBoard };
}

export function addListToBoard(list, boardName) {
    const actionPayload = {
        list,
        boardName
    };

    return { type: ADD_LIST_TO_BOARD_ACTION, payload: actionPayload };
}