export function formatNumber(number) {
    let numberString = number.toString();
    return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

}

export function calculateRating(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i].rating_value;
    }
    let avg = sum / data.length;
    return { average: avg, opinions: data.length };
}