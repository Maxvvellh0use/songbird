import { CREATE_NEW_BIRD, CreateNewBirdAction } from "./types";

export const createNewBird = (newBird: object): CreateNewBirdAction => {
    return {
        type: CREATE_NEW_BIRD,
        payload: newBird,
    }
}


