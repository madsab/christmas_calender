
const daysToChristmas = (): number => {
    const today = new Date();
    const christmas = new Date(today.getFullYear(), 11, 24);
    const oneDay = 1000 * 60 * 60 * 24;

    const daysLeft = Math.ceil((christmas.getTime() - today.getTime()) / oneDay);

    return daysLeft;
}

export default daysToChristmas;
