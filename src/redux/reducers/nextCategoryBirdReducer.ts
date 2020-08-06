import { NEXT_CATEGORY_BIRD, NextCategoryBird, SystemState } from "../types";
import birdsData from "../../data/birdsData";
import { startCategoryIndex } from "../../components/CurrentBirdBlock/consts";
import { getRandomBirdIndex } from "../../components/CurrentBirdBlock/helpers/getRandomBirdIndex";

const randomBirdIndex: number = getRandomBirdIndex();
const firstBirdData = birdsData[startCategoryIndex][randomBirdIndex];
const otherBirdsInCategory: object[] = birdsData[startCategoryIndex].filter((bird, index) =>
    index !== randomBirdIndex);

export const initialState: SystemState = {
    currentBird: {
        audio: firstBirdData.audio,
        description: firstBirdData.description,
        id: 0,
        image: firstBirdData.image,
        name: firstBirdData.name,
        species: firstBirdData.species,
        otherBirdsInCategory: otherBirdsInCategory,
        activeHeaderClass: [' bird_list_item__active', '', '', '', '', ''],
    },
    selectBird: {
        activeListClass: ['', '', '', '', '', ''],
        audio: '',
        description: '',
        id: 0,
        image: '',
        name: '',
        species: '',
    },
    categoryBird: {
        categoryIndex: 0,
        scoreCategory: 6,
        score: 0,
    },
    audioBird: {
        selectAudio: new Audio(),
        currentAudio: new Audio(firstBirdData.audio),
    }
}

export const nextCategoryBirdReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case NEXT_CATEGORY_BIRD:
            return action.payload
        default: return state
    }
}
