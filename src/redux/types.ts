export const CREATE_NEW_BIRD: string = 'CURRENT_BIRD/CREATE_NEW_BIRD';

export interface CreateNewBirdAction {
    type: typeof CREATE_NEW_BIRD
    payload: object
}

export interface SystemState {
    currentBird: {
        birdName: string,
        birdSpecies: string,
        birdDescription: string,
        birdImagePath: string,
        birdAudioPath: string,
        categoryBirdIndex: number,
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
    }
}

