import {
    CREATE_NEW_BIRD,
    CreateNewBirdAction,
    NEXT_CATEGORY_BIRD,
    NextCategoryBird, NextCategoryBirdAction,
    SELECT_BIRD,
    SelectBirdAction, SystemState
} from "./types";

export const createNewBird = (newBird: SystemState): CreateNewBirdAction => {
    return {
        type: CREATE_NEW_BIRD,
        payload: newBird,
    }
}

export const selectNewBird = (newBird: SystemState): SelectBirdAction => {
    return {
        type: SELECT_BIRD,
        payload: newBird,
    }
}

export const nextCategoryBird = (newCategory: SystemState): NextCategoryBirdAction => {
    return {
        type: NEXT_CATEGORY_BIRD,
        payload: newCategory,
    }
}




