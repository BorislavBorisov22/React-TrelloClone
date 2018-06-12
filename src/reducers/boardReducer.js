
import initialState from './initialState';
import { CREATE_BOARD_ACTION, ADD_LIST_TO_BOARD_ACTION } from '../actions/actions';
import { ADD_CARD_TO_LIST_ACTION } from './../actions/actions';

export default function boardReducer(state = initialState.boards, action) {
    switch (action.type) {
        case CREATE_BOARD_ACTION:
            let newState = [...state, Object.assign({}, action.payload)]
            localStorage.setItem('boards', JSON.stringify(newState));

            return newState;
        case ADD_LIST_TO_BOARD_ACTION:
            newState = state.map(b => {
                const boardCopy = Object.assign({}, b);
                if (boardCopy.name === action.payload.boardName) {
                    boardCopy.lists = [...boardCopy.lists, action.payload.list];
                }

                return boardCopy;
            });
            localStorage.setItem('boards', JSON.stringify(newState));
            return newState;
        case ADD_CARD_TO_LIST_ACTION:
            const { card, listName, boardName } = action.payload;

            newState = state.map(b => {
                const boardCopy = Object.assign({}, b);
                if (boardCopy.name !== boardName || !boardCopy.lists) {
                    return boardCopy;
                }

                boardCopy.lists = boardCopy.lists.map(l => {
                    const cardIndex = l.cards.indexOf(card);
                    if (cardIndex >= 0) {
                        l.cards.splice(cardIndex, 1);
                    }

                    l.cards = [...l.cards];
                    if (l.name === listName) {
                        l.cards.push(card);
                    }

                    return l;
                });

                return boardCopy;
            });

            localStorage.setItem('boards', JSON.stringify(newState));
            return newState;
        default:
            return state;
    }
}