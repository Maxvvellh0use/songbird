import birdsData from "./birdsData";
import { birdsCategories } from "./birdsCategories";
import { startCategoryIndex } from "../components/CurrentBirdBlock/consts";

export const getAllBirdsNames = (): [][] => {
    const allBirds: Array<object> = [];
    const result: Array<any>  = [];
    const allNames: string[] = [];
    birdsData.map((category: object[]) => category.map((bird: object) => allBirds.push(bird)));
    allBirds.map((bird: any) => allNames.push(bird.name));
    while (allNames.length > startCategoryIndex)
        result.push(allNames.splice(startCategoryIndex, birdsCategories.length));
    return result;
}
