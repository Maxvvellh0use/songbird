export const CREATE_NEW_BIRD: string = 'CURRENT_BIRD/CREATE_NEW_BIRD';

export interface CreateNewBirdAction {
    type: typeof CREATE_NEW_BIRD
    payload: Props
}

export interface SystemState {
    currentBird: {
        audio: string,
        description: string,
        id: number,
        image: string,
        name: string,
        species: string,
        otherBirdsInCategory: [],
    },
    selectBird: {
        audio: string
        description: string
        id: number
        image: string
        name: string
        species: string
    }
}
export interface Props {
    currentBird: {
        audio: string,
        description: string,
        id: number,
        image: string,
        name: string,
        species: string,
        otherBirdsInCategory: [],
    },
    selectBird: {
        audio: string
        description: string
        id: number
        image: string
        name: string
        species: string
    }
}

export const SELECT_BIRD: string = 'SELECT_BIRD';

export interface SelectBirdAction {
    type: typeof SELECT_BIRD
    payload: Props
}


export interface SelectBird {
    selectBird: {
        audio: string
        description: string
        id: number
        image: string
        name: string
        species: string
    }
}
