
import initialState from './initialState';
import { CREATE_BOARD_ACTION, ADD_LIST_TO_BOARD_ACTION } from '../actions/actions';
import { ADD_CARD_TO_LIST_ACTION } from './../actions/actions';

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
        case ADD_CARD_TO_LIST_ACTION:
            const { card, listName, boardName } = action.payload;

            const newState = state.map(b => {
                const boardCopy = Object.assign({}, b);
                if (boardCopy.name !== boardName || !boardCopy.lists) {
                    return boardCopy;
                }

                boardCopy.lists = boardCopy.lists.map(l => {
                    l.cards = [...l.cards];
                    if (l.name === listName) {
                        l.cards.push(card);
                    }

                    return l;
                });

                return boardCopy;
            });

            return newState;
        default:
            return state;
    }
}