
export const itemHelpers = {
    formatPrice: (price: number) => price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}
