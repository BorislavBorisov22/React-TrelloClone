import { combineReducers } from "../store/connectStore";
import boardReducer from "./boardReducer";

export default combineReducers({
    boards: boardReducer
});