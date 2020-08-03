import {CREATE_NEW_BIRD, CreateNewBirdAction, Props, SELECT_BIRD, SelectBirdAction} from "./types";

export const createNewBird = (newBird: Props): CreateNewBirdAction => {
    return {
        type: CREATE_NEW_BIRD,
        payload: newBird,
    }
}

export const selectNewBird = (newBird: Props): SelectBirdAction => {
    return {
        type: SELECT_BIRD,
        payload: newBird,
    }
}


