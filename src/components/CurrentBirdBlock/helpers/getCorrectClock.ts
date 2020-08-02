export const getCorrectClock = (clock: number): string => {
    const minutes = clock > 60 ? '0' + Math.floor(clock / 60)  : '00';
    const seconds = clock > 60 ? Math.floor(clock) -
        (Math.floor(clock / 60) * 60) : `${Math.floor(clock)}`;
    return `${minutes}:${seconds > 10 ? seconds : '0' + seconds}`;
}
