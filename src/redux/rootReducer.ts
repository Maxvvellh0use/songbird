import { combineReducers } from "redux";
import { currentBirdReducer } from "./reducers/currentBirdReducer";
import { selectBirdReducer } from "./reducers/selectBirdReducer";

export const rootReducer = combineReducers({
    currentBird: currentBirdReducer,
    selectBird: selectBirdReducer,
});
