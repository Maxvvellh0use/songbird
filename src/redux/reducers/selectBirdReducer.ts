import { SELECT_BIRD, SelectBird } from "../types";

const initialState: SelectBird = {
    selectBird: {
        audio: '',
        description: '',
        id: 0,
        image: '',
        name: '',
        species: '',
    }
}

export const selectBirdReducer = (state = initialState, action: any) => {
    console.log(state)
    switch (action.type) {
        case SELECT_BIRD:
            return action.payload
        default: return state
    }
}
