export const CREATE_NEW_BIRD: string = 'CURRENT_BIRD/CREATE_NEW_BIRD';

export interface CreateNewBirdAction {
    type: typeof CREATE_NEW_BIRD
    payload: Props
}

export interface SystemState {
    currentBird: {
        birdName: string,
        birdSpecies: string,
        birdDescription: string,
        birdImagePath: string,
        birdAudioPath: string,
        categoryBirdIndex: number,
        otherBirdsInCategory: object[];
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
    currentBirdInf: {
        birdName: string,
        birdSpecies: string,
        birdDescription: string,
        birdImagePath: string,
        birdAudioPath: string,
        categoryBirdIndex: number,
        otherBirdsInCategory: object[];
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
