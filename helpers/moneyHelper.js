export function generateCurrency(value) {
    return new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "VND",
    }).format(value);
}
