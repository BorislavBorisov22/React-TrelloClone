
import { CREATE_BOARD_ACTION, ADD_LIST_TO_BOARD_ACTION, ADD_CARD_TO_LIST_ACTION } from './actions';

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

export function addCardToList(cardName, listName, boardName) {
    const actionPlayload = {
        card: cardName,
        listName,
        boardName
    };

    return { type: ADD_CARD_TO_LIST_ACTION, payload: actionPlayload };
}