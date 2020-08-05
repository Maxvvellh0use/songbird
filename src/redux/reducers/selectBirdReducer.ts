import { SELECT_BIRD, SelectBird } from "../types";
import { defaultSelectList } from "../consts";

const initialState: SelectBird = {
    selectBird: {
        audio: '',
        description: '',
        id: 0,
        image: '',
        name: '',
        species: '',
        activeListClass: defaultSelectList,
    }
}

export const selectBirdReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SELECT_BIRD:
            return action.payload
        default: return state
    }
}
