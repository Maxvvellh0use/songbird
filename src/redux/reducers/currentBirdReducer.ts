import { CREATE_NEW_BIRD, SystemState } from "../types";
import { defaultSelectList } from "../consts";

const initialState: SystemState = {
    currentBird: {
        audio: '',
        description: '',
        id: 0,
        image: '',
        name: '',
        species: '',
        otherBirdsInCategory: [],
        activeHeaderClass: [],
    },
    selectBird: {
        audio: '',
        description: '',
        id: 0,
        image: '',
        name: '',
        species: '',
        activeListClass: defaultSelectList,
    },
    categoryBird: {
        categoryIndex: 0,
        scoreCategory: 0,
        score: 0
    },
    audioBird: {
        currentAudio: new Audio(),
        selectAudio: new Audio(),
    }
}

export const currentBirdReducer = (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case CREATE_NEW_BIRD:
            return action.payload
        default: return state
    }
}
