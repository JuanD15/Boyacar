export function formatNumber(number) {
    let numberString = number.toString();
    return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

}