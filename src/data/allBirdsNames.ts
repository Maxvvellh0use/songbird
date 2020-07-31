import birdsData from "./birdsData";

export const getAllBirdsNames = () => {
    const allBirds: Array<object> = [];
    const allNames: string[] = [];
    birdsData.map((category: object[]) => category.map((bird: object) => allBirds.push(bird)));
    allBirds.map((bird: any) => allNames.push(bird.name));
    return allNames;
}
