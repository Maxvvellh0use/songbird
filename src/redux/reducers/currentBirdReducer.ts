import { CREATE_NEW_BIRD, SystemState } from "../types";

const initialState: SystemState = {
    currentBird: {
        birdName: '',
        birdSpecies: '',
        birdDescription: '',
        birdImagePath: '',
        birdAudioPath: '',
        categoryBirdIndex: NaN,
    }
}

export const currentBirdReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CREATE_NEW_BIRD:
            return action.payload
        default: return state
    }
}
