export const CREATE_NEW_BIRD: string = 'CURRENT_BIRD/CREATE_NEW_BIRD';

export interface CreateNewBirdAction {
    type: typeof CREATE_NEW_BIRD
    payload: SystemState
}

export interface SystemState {
    currentBird: {
        audio: string,
        description: string,
        id: number,
        image: string,
        name: string,
        species: string,
        otherBirdsInCategory: object[],
        activeHeaderClass: string[],
    },
    selectBird: {
        audio: string,
        description: string,
        id: number,
        image: string,
        name: string,
        species: string,
        activeListClass: string[],
    },
    categoryBird: {
        categoryIndex: number,
        scoreCategory: number,
        score: number,
    },
    audioBird: {
        selectAudio: HTMLAudioElement,
        currentAudio: HTMLAudioElement,
    },
    selectNewBird?: any,
    setAudioBird?: any,
    nextCategoryBird?: any,
    createNewBird?: any,
}

export const SELECT_BIRD: string = 'SELECT_BIRD';

export interface SelectBirdAction {
    type: typeof SELECT_BIRD
    payload: SystemState
}


export interface SelectBird {
    selectBird: {
        audio: string
        description: string
        id: number
        image: string
        name: string
        species: string
        activeListClass: string[],
    }
}

export const NEXT_CATEGORY_BIRD: string = 'NEXT_CATEGORY_BIRD';

export interface NextCategoryBirdAction {
    type: typeof NEXT_CATEGORY_BIRD
    payload: SystemState
}

export interface NextCategoryBird {
    categoryBird: {
        categoryIndex: number
        score: number
    }
}

export const SET_AUDIO_BIRD: string = 'SET_AUDIO_BIRD'

export interface SetAudioBirdAction {
    type: typeof NEXT_CATEGORY_BIRD
    payload: SetAudioBird
}

export interface SetAudioBird {
    audioBird: {
        selectAudio: string,
        currentAudio: string,
    }
}


