import { CREATE_NEW_BIRD, SystemState } from "../types";

const initialState: SystemState = {
    currentBird: {
        audio: '',
        description: '',
        id: 0,
        image: '',
        name: '',
        species: '',
        otherBirdsInCategory: [],
    },
    selectBird: {
        audio: '',
        description: '',
        id: 0,
        image: '',
        name: '',
        species: '',
    },
    categoryBird: {
        categoryIndex: 0,
        score: 0
    }
}

export const currentBirdReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CREATE_NEW_BIRD:
            return action.payload
        default: return state
    }
}
