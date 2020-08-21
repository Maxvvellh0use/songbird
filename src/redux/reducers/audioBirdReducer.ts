import { SELECT_BIRD, SetAudioBird } from "../types";

const initialState: SetAudioBird = {
    audioBird: {
        selectAudio: '',
        currentAudio: '',
    }
}

export const setAudioBirdReducer = (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SELECT_BIRD:
            return action.payload
        default: return state
    }
}
