
export const getDeclension = (totalScore: number) => {
    const lastNumber  = +(totalScore.toString().slice(1, 2));
    if (totalScore < 20 || totalScore > 24) {
        return 'баллов';
    } else if (totalScore > 20 && lastNumber === 1) {
        return 'балл'
    } else if (totalScore > 20 && (lastNumber === 2 || lastNumber === 3 || lastNumber === 4)) {
        return 'балла'
    }
}
