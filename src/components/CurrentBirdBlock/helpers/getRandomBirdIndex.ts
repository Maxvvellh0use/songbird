import { maxCategoryIndex, minCategoryIndex } from "../consts";


export const getRandomBirdIndex = (): number => {
    const rand = minCategoryIndex - 0.5 + Math.random() * (maxCategoryIndex - minCategoryIndex + 1);
    return Math.round(rand);
}

