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
        categoryIndex: number
        score: number
    }
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

