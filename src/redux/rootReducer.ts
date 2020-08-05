import { combineReducers } from "redux";
import { currentBirdReducer } from "./reducers/currentBirdReducer";
import { selectBirdReducer } from "./reducers/selectBirdReducer";
import { nextCategoryBirdReducer } from "./reducers/nextCategoryBirdReducer";
import { setAudioBirdReducer } from "./reducers/audioBirdReducer";

export const rootReducer = combineReducers({
    currentBird: currentBirdReducer,
    selectBird: selectBirdReducer,
    categoryBird: nextCategoryBirdReducer,
    audioBird: setAudioBirdReducer
});
