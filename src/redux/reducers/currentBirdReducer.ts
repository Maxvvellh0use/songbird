import { CREATE_NEW_BIRD, SystemState } from "../types";

const initialState: SystemState = {
    currentBird: {
        birdName: '',
        birdSpecies: '',
        birdDescription: '',
        birdImagePath: '',
        birdAudioPath: '',
        categoryBirdIndex: NaN,
        otherBirdsInCategory: [],
    },
    selectBird: {
        audio: '',
        description: '',
        id: 0,
        image: '',
        name: '',
        species: '',
    }
}

export const currentBirdReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CREATE_NEW_BIRD:
            return action.payload
        default: return state
    }
}
