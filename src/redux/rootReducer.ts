import { combineReducers } from "redux";
import { currentBirdReducer } from "./reducers/currentBirdReducer";

export const rootReducer = combineReducers({
    currentBird: currentBirdReducer
});
