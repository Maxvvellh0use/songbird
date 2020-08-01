import {CREATE_NEW_BIRD} from "../types";

const initialState: object = {
    birdName: '',
    birdSpecies: '',
    birdDescription: '',
    birdImagePath: '',
    birdAudioPath: '',
}

export const currentBirdReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CREATE_NEW_BIRD:
            // return state.currentBird
        default: return state
    }
}
